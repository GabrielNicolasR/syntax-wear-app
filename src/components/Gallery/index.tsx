import './styles.css';
import galeriaHomem from '../../assets/images/galeria-homem.jpg';
import galeriaTenisRoxo from '../../assets/images/galeria-tenis-roxo.jpg';
import galeriaModelo from '../../assets/images/galeria-modelo.jpg';
import galeriaTenisColorido from '../../assets/images/galeria-tenis-colorido.jpg';
import galeriaTenisBrancoEPreto from '../../assets/images/galeria-tenis-branco-e-preto.jpg';
import galeriaTenisCinza from '../../assets/images/galeria-tenis-cinza.jpg';
import { Overlay } from '../Overlay';
import { Button } from '../Button';
import { useRouter } from '@tanstack/react-router';

export const Gallery = () => {

    const router = useRouter();

    return (
        <section className="container py-10">
            <div className="gallery-grid">
                <div className="gallery-highlight rounded-[20px] overflow-hidden relative">
                    <img
                        src={galeriaHomem}
                        alt="Krypton One - Estilo urbano com atitude"
                        className="w-full h-full object-cover"
                    />
                    <Overlay
                        title="Krypton One"
                        subtitle="Estilo urbano com atitude"
                        className="inset-0 justify-center">
                        <Button
                            variant="secondary"
                            size="sm"
                            onclick={() =>
                                router.navigate({ to: "/products/category/$category", params: { category: "feminino" } })
                            }
                        >
                            Feminino
                        </Button>
                        <Button
                            variant="secondary"
                            size="sm"
                            onclick={() =>
                                router.navigate({ to: "/products/category/$category", params: { category: "masculino" } })
                            }
                        >
                            Masculino
                        </Button>
                    </Overlay>
                </div>

                <div className="gallery-sneaker-purple rounded-[20px] overflow-hidden">
                    <img
                        src={galeriaTenisRoxo}
                        alt="Sneaker Purple"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="gallery-model rounded-[20px] overflow-hidden">
                    <img
                        src={galeriaModelo}
                        alt="Modelo feminina"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="gallery-sneaker-color rounded-[20px] overflow-hidden">
                    <img
                        src={galeriaTenisColorido}
                        alt="Sneaker colorido"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="gallery-sneaker-white rounded-[20px] overflow-hidden">
                    <img
                        src={galeriaTenisBrancoEPreto}
                        alt="Sneaker branco e preto"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="gallery-sneaker-silver rounded-[20px] overflow-hidden">
                    <img
                        src={galeriaTenisCinza}
                        alt="Sneaker cinza"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
