import iconInstagram from "@/assets/images/icon-instagram.png"
import iconFacebook from "@/assets/images/icon-facebook.png"
import iconTiktok from "@/assets/images/icon-tiktok.png"
import iconWhatsapp from "@/assets/images/icon-whatsapp.png"

const socialLinks = [
    { href: "#", icon: iconInstagram, name: "Ícone do Instagram" },
    { href: "#", icon: iconFacebook, name: "Ícone do Facebook" },
    { href: "#", icon: iconTiktok, name: "Ícone do TikTok" },
    { href: "#", icon: iconWhatsapp, name: "Ícone do WhatsApp" }
]

export const SocialLinks = () => {
    return (
        <div>
            <p className="mb-4 text-xl font-medium text-surface-alt">Redes Sociais</p>

            <ul className="flex gap-5">
                {socialLinks.map(({ href, icon, name }) => (
                    <li key={name}>
                        <a href={href} aria-label={name}>
                            <img src={icon} alt={name} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}