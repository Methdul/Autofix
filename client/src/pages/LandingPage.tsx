import Hero from '../components/landing/Hero';
import CategoryGrid from '../components/landing/CategoryGrid';
import DualCTA from '../components/landing/DualCTA';
import Benefits from '../components/landing/Benifits';


/**
 * Landing page component that assembles all landing sections
 * @returns LandingPage component
 */
export default function LandingPage() {
    return (
        <div
            className="min-h-screen relative"
            style={{
                //backgroundImage: 'url(/Gemini_Generated_Image_b3barcb3barcb3ba.png)',
                backgroundImage: 'linear-gradient(to right, rgba(254, 254, 255, 0.97), rgba(254, 254, 255, 0.97))',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Dark overlay for readability across all sections */}
            {/* <div className="absolute inset-0 bg-black/55 pointer-events-none" /> */}
            <div className="relative z-10">
                <Hero />
                <CategoryGrid />
                <Benefits />
                <DualCTA />
            </div>
        </div>
    );
}
