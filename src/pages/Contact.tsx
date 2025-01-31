import { Layout } from "../components/Layout.tsx";
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
    return (
        <Layout loading={false}>
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">Magaña sports</h1>
                        <p className="text-lg text-gray-600">Tu mejor opción en uniformes escolares</p>
                    </div>
                    <div className="w-32 h-32">
                        <img
                            src="/logo.jpg"
                            alt="Logo Uniformes Magaña"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Información de contacto y redes sociales */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
                        <div className="space-y-4">
                            <p className="flex items-center gap-2">
                                <span className="font-medium">Dirección:</span>
                                71222 Yahuiche, 71222 Oaxaca de Juárez, Oax.
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="font-medium">Teléfono:</span>
                                +52 951-322-2076
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Síguenos en Redes Sociales</h2>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://web.facebook.com/profile.php?id=61560341385338"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                            >
                                <Facebook className="w-6 h-6" />
                                <span>Facebook</span>
                            </a>
                            <a
                                href="https://www.instagram.com/maganasportss/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-pink-600 hover:text-pink-700"
                            >
                                <Instagram className="w-6 h-6" />
                                <span>Instagram</span>
                            </a>
                            <a
                                href="https://wa.me/529513222076"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-green-600 hover:text-green-700"
                            >
                                <MessageCircle className="w-6 h-6" />
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mapa */}
                <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d682.7842454170699!2d-96.76918697377562!3d17.11580652127057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c71f0025697ecd%3A0x1924b872962fb1b6!2sMAGA%C3%91A%20SPORTS!5e0!3m2!1sen!2smx!4v1738115380571!5m2!1sen!2smx"
                        width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </Layout>
    )
}