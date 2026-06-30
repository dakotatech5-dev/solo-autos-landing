# Solo Autos Landing

Landing page en Next.js, React y Tailwind CSS para captar vendedores de carros usados particulares.

## Configuración rápida

1. Instala dependencias con `npm install`.
2. Ejecuta en local con `npm run dev`.
3. Despliega en Vercel conectando este repositorio.

## Variables fáciles de cambiar

Edita `components/SiteConfig.ts` para actualizar:

- Número de WhatsApp
- Correo comercial
- Ciudad o zona de operación
- Mensaje prellenado de WhatsApp

## Integración futura del formulario

El formulario ya valida campos obligatorios y arma un `payload` con los datos. En `components/LeadForm.tsx` está marcado el punto donde se puede conectar Google Sheets, Airtable, Supabase o un backend propio.
