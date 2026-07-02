import express from "express";
import { authenticateToken } from "./auth.middleware.js";
import db from "./firebase.js";
import { collection, getDocs, getDoc, doc, addDoc, deleteDoc } from "firebase/firestore";

const router = express.Router();

router.get("/api/products", authenticateToken, async (req, res) => {
  try {
    const snapshot = await getDocs(collection(db, "products"));
    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
});

router.get("/api/products/:id", authenticateToken, async (req, res) => {
  try {
    const productRef = doc(db, "products", req.params.id);
    const productSnap = await getDoc(productRef);

    if (!productSnap.exists()) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json({ id: productSnap.id, ...productSnap.data() });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener producto" });
  }
});

router.post("/api/products/create", authenticateToken, async (req, res) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({ error: "Datos incompletos" });
    }

    const docRef = await addDoc(collection(db, "products"), { name, price });
    res.json({ id: docRef.id, name, price });
  } catch (error) {
    res.status(500).json({ error: "Error al crear producto" });
  }
});

router.delete("/api/products/:id", authenticateToken, async (req, res) => {
  try {
    const productRef = doc(db, "products", req.params.id);
    await deleteDoc(productRef);
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar producto" });
  }
});

export default router;
