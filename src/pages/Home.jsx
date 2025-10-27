
import WhyPQC from "../components/WhyPQC";
import WhatIsPQC from "../components/WhatIsPQC";
import MigrationKM from "../components/MigrationKM";
import NISTDocs from "../components/NISTDocs";
import ContactUs from "../components/ContactUs";
import {sections} from '../constants/data'

export default function Home() {
  const whyData = sections.find((section)=> section.id==='why')
  const whatIsPQCdata = sections.find((section)=> section.id==='what')
  const migrationData = sections.find((section)=> section.id==='migration')
  const nistDocsData = sections.find((section)=> section.id==='nist')

  return (
    <main className="flex flex-col items-center">
      <WhyPQC sec={whyData}/>
      <WhatIsPQC sec={whatIsPQCdata} />
      <MigrationKM sec={migrationData}/>
      <NISTDocs sec={nistDocsData}/>
      <ContactUs />
    </main>
  );
}
