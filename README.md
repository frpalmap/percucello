# Percucello

Sitio web de Jesús «Percucello» Vásquez — cellista, director musical y gestor cultural venezolano.

Publicado en **[www.percucello.com](https://www.percucello.com)** vía GitHub Pages (rama `QAPercucello`).

---

## Estructura

```
percucello/
├── index.html                        # Portada principal (bilingüe ES/EN)
├── styles.css                        # Sistema de diseño completo
├── site.js                           # Toggle ES/EN, nav móvil, reveal on scroll
├── image-slot.js                     # Componente drag & drop para fotos
├── assets/
│   ├── percucello-art.webp           # Ilustración protagonista (hero)
│   └── percucello.jpg                # Foto para la sección de biografía
├── projects/
│   ├── centro-cultural-canuto.html   # Página del CCC
│   ├── el-cello-como-puente.html     # Página del proyecto Puente
│   └── la-vida-suena.html            # Página de La Vida Suena (ONG)
├── uploads/                          # Fotos adicionales
└── public/                           # Assets estáticos varios
```

## Tecnologías

- HTML · CSS · JavaScript vanilla — sin frameworks ni dependencias de build
- GitHub Pages — despliegue estático directo desde la rama `QAPercucello`
- Formspree (pendiente de configurar) — formulario de contacto

## Desarrollo local

Cualquier servidor estático funciona:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## Ramas

| Rama | Propósito |
|---|---|
| `QAPercucello` | Producción — sirve www.percucello.com |
| `main` | Base / historial |
| `Dev` | Desarrollo anterior |

## Pendiente

- [ ] Configurar Formspree: reemplazar `REEMPLAZA_ID` en `index.html` con el ID real de formspree.io
- [ ] Actualizar fechas de agenda con conciertos reales
- [ ] Confirmar video de YouTube embebido (`nMGXHVSWs1Y`)

## Contacto

Jesús Vásquez (Percucello) — [percucello@gmail.com](mailto:percucello@gmail.com)
Fidel Palma — [https://github.com/frpalmap](https://github.com/frpalmap)
