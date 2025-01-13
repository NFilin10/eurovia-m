import React from 'react'
import Styles from './MainSection.module.css'
import history from './../../../assets/history.jpg'
import vision from './../../../assets/vision.jpg'
import mission from './../../../assets/mission.jpg'


function MainSection() {

    return (
        <div className={Styles.mainSectionWrapper}>
            <div className={Styles.history}>
                <img className={Styles.image} src={history} alt=""/>

                <div className={Styles.textPart}>
                    <h1 className={Styles.heading}>Meie teekond alates <span className={Styles.whiteWord}>1995.</span> aastast</h1>
                    <p className={Styles.mainText}>
                        EUROVIA-M alustas tegevust Eesti turul 1995. aastal, pakkudes laia valikut autorehvidega seotud teenuseid. Ettevõtte pikaajaline kogemus veoautorehvide protekteerimise valdkonnas on võimaldanud luua usaldusväärseid koostöösuhteid kohalike ja rahvusvaheliste klientidega.
                        Alates 2002. aastast omame rahvusvahelist kvaliteedisertifikaati ISO 9001, mis kinnitab meie töötajate kõrget kvalifikatsiooni, tehnoloogilisi võimalusi ning vastutustundlikku garantiisüsteemi. Oleme jätkuvalt pühendunud kvaliteedile ja innovatsioonile.
                    </p>
                </div>
            </div>

            <div className={Styles.vision}>
                <div className={Styles.textPart}>
                    <h1 className={Styles.heading}>Meie <span className={Styles.whiteWord}>missioon</span> – kvaliteet ja keskkonnasäästlikkus</h1>
                    <p className={Styles.mainText}>
                        EUROVIA-M eesmärk on pakkuda autotranspordiettevõtetele kvaliteetseid, keskkonnasõbralikke ja
                        kulutõhusaid rehvilahendusi. Meie töö aitab pikendada rehvide eluiga, vähendada jäätmete teket
                        ja edendada vastutustundlikku ettevõtlust transpordisektoris.
                    </p>
                </div>
                <img className={Styles.image} src={vision} alt=""/>
            </div>

            <div className={Styles.mission}>
                <img className={Styles.image} src={mission} alt=""/>
                <div className={Styles.textPart}>
                    <h1 className={Styles.heading}><span className={Styles.whiteWord}>Visioon</span> – olla rehvilahenduste juhtiv tegija</h1>
                    <p className={Styles.mainText}>
                        Meie visiooniks on saada regiooni juhtivaks autorehvide taastamise ja hooldusteenuste pakkujaks, pakkudes innovatiivseid lahendusi, mis toetavad nii meie klientide kui ka keskkonna heaolu. EUROVIA-M seab eesmärgiks tehnoloogia pideva arendamise ning klientide usalduse säilitamise läbi laitmatu teeninduse ja kvaliteedi.
                    </p>
                </div>
            </div>
        </div>



    );
}

export default MainSection;