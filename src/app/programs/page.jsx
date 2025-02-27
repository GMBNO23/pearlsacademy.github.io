import ProgramGrid from './components/ProgramGrid';
import ProgramSection, { FadeInSection } from './components/ProgramSection';
import AdmissionSection from './components/AdmissionSection';

export default function Programs(){
    return(
        <main>
            <ProgramGrid />
            <ProgramSection />
            <FadeInSection />
            <AdmissionSection />
        </main>
    );
}