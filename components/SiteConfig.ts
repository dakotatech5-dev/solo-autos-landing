export const siteConfig = {
  brand: "Solo Autos",
  city: "Bogotá, Colombia y alrededores",
  address: "Carrera 8D #106-26, Bogotá D.C., Colombia",
  // Reemplaza este número por el WhatsApp real de Solo Autos, con indicativo de país y sin signos.
  whatsappNumber: "573054114767",
  whatsappDisplay: "+57 305 411 4767",
  // Reemplaza este correo por el correo comercial real.
  email: "dakotatech5@gmail.com",
  whatsappMessage:
    "Hola, quiero vender mi carro. ¿Me pueden ayudar a recibir una oferta?"
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`;
