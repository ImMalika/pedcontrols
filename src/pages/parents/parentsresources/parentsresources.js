import React from "react";
import c from "./parentsresources.scss";
import { Nav } from "../../../components/navbar/nav";
import navData from "../../../components/data/data.json";
import Footer from "../../../components/footer/footer";
import Paragraph from "../../../components/paragraph/paragraph";
import Title from "../../../components/title/title";
import Title2 from "../../../components/title2/title2";
import Link from "../../../components/links/links";
import Title3 from "../../../components/title3/title3";
import Myimg from "../../../components/myimg/myimg";
// Images //
import Img1 from "../../../media/parentsmedia/useful.jpg";
//

const Parentsresources = () => {
  return (
    <div className={c.parentsresources}>
      <Nav dataLink={navData.navParents} />
      <div className="main">
        <Title titleName={"FOYDALI MANBALAR"} />
        <Myimg img={Img1} />
        <Paragraph
          text={
            "Ijtimoiy tarmoqlarda o‘tkazilgan so‘rovnomalar asosida har bir o‘zbek o‘qib chiqishi tavsiya qilinadigan kitoblar ro‘yxatini aniqladi. Unga ko‘ra, har bir kishi o‘qib chiqishi kerak bo‘lgan kitoblar quyidagilardir:"
          }
        />
        <div className="ektromismdiv">
          <ul>
            <li><b>1. </b>Qur'oni karimga oid kitoblar (Tafsiri Hilol, Tafsiri Irfon, Qur'oni karim ma'nolarining tarjimalari).</li>
            <li><b>2. </b>Hadis kitoblari (Oltin Silsila, Hadis va Hayot, Riyozus-solihiyn va boshqa hadis kitoblari).</li>
            <li><b>3. </b>O‘zbek davlatchiligiga oid kitoblar (Konstitutsiya, Prezident asarlari, qonunlar va h.k.).</li>
            <li><b>4. </b>Hazrati Alisher Navoiy va boshqa mumtoz adabiyotimizga tegishli asarlar.</li>
            <Title3 title3={"Shuningdek quyidagi kitoblar ham tavsiya etildi:"}/>
            <li><b>5. </b>Al-Adab Al-Mufrad (Imom Buxoriy).</li>
            <li><b>6. </b>Muxtasarul viqoya (Kifoya) (Shayx Muhammad Sodiq Muhammad Yusuf).</li>
            <li><b>7. </b>Ibodati Islomiya (Ahmad Hodiy Maqsudiy).</li>
            <li><b>8. </b>Sunniy aqidalar (Shayx Muhammad Sodiq Muhammad Yusuf).</li>
            <li><b>9. </b>Payg‘ambarlar tarixi Islom tarixidir (Rahmatulloh Obidov).</li>
            <li><b>10. </b>O‘tkan kunlar, Mehrobdan chayon (Abdulla Qodiriy).</li>
            <li><b>11. </b>Turkiston qayg‘usi (Alixonto‘ra Sog‘uniy).</li>
            <li><b>12. </b>Qazo bo‘lgan namoz (Xurshid Do‘stmuhammmad).</li>
            <li><b>13. </b>Boburnoma (Zahiriddin Muhammad Bobur).</li>
            <li><b>14. </b>Iqrornoma, Urush va tinchlik (Lev Tolstoy).</li>
            <li><b>15. </b>Yulduzli tunlar, Ajdodlar dovoni (Pirimqul Qodirov).</li>
            <li><b>16. </b>Tarixi Muhammadiy (Alixonto‘ra Sog‘uniy).</li>
            <li><b>17. </b>Graf Monte Kristo (Aleksandr Dyuma).</li>
            <li><b>18. </b>Robinzon Kruzo va uning sarguzashtlari (Daniyel Defo).</li>
            <li><b>19. </b>Usta va Margarita (Mixail Bulgakov).</li>
            <li><b>20. </b>Shum bola (G‘afur G‘ulom).</li>
            <li><b>21. </b>Shohnoma (Firdavsiy).</li>
            <li><b>22. </b>Anbiyolar qissasi (Rabg‘uziy).</li>
            <li><b>23. </b>Mening Dog‘istonim (Rasul Hamzatov).</li>
            <li><b>24. </b>Kalila va Dimna.</li>
            
            <li><b>25. </b>Saodat asri qissalari (Lutfiy Qozonchi)</li>
            <li><b>26. </b>Jannatga yo‘l (Abdulla Oripov).</li>
            <li><b>27. </b> Mo‘'jizalar sodir bo‘lmaydi (Li Myon Bak).</li>
            <li><b>28. </b>Mantiqut tayr (Fariddiddin Attor).</li>
            <li><b>29. </b>Amerika fojiasi (Teodor Drayzer).</li>
            <li><b>30. </b>Jinoyat va jazo (Dostoyevskiy).</li>
            <li><b>31. </b>Devoni hikmat (Ahmad Yassaviy).</li>
            <li><b>32. </b>Qobusnoma (Kaykovus).</li>
            <li><b>33. </b>Bolalik (Oybek).</li>
            <li><b>34. </b>Daftar hoshiyasidagi bitiklar (O‘tkir Hoshimov).</li>
            <li><b>35. </b>Odamiylik mulki (Tohir Malik).</li>
            <li><b>36. </b>Kichik shahzoda (Antuan de Sent Ekzyuperi).</li>
            <li><b>37. </b>Fozil kishilar shahri (Forobiy).</li>
            <li><b>38. </b>Oshkora qotillik qissasi (Gabriel Markes).</li>
            <li><b>39. </b>Kafansiz ko‘milganlar (Shukrullo).</li>
            <li><b>40. </b>Ruhiy tarbiya, Xislatli hikmatlar sharhi (Shayx Muhammad Sodiq Muhammad Yusuf).</li>
            <li><b>41. </b>Asrga tatigulik kun, Qiyomat, Jamila, Oq kema (Chingiz Aytmatov).</li>
            <li><b>42. </b>Qaynona, O‘gay ona (Lutfiy Qozonchi).</li>
            <li><b>43. </b>Bu dunyoda o‘lib bo‘lmaydi, Ot kishnagan oqshom, Otamdan qolgan dalalar, Oydinda yurgan odamlar (Tog‘ay Murod).</li>
            <li><b>44. </b>Xulofoi roshidiyn (Rizouddin ibn Fahruddin).</li>
            <li><b>45. </b>Oisha roziallohu anho (Abdulhamid Tahmoz).</li>
            <li><b>46. </b>Gunohi kabiralar (Imomi Zahabiy).</li>
            <li><b>47. </b>Shamoili Muhammadiya (Termiziy).</li>
            <li><b>48. </b>Men kim sohibqiron Amir Temur (Marsel Brion).</li>
            <li><b>49. </b>Nurul yaqin (Xuzariy).</li>
            <li><b>50. </b>Fiqhul akbar (Abu Hanifa).</li>
            <li><b>51. </b>Tahoviy aqidasi (Tahoviy)</li>
            <li><b>52. </b>Ihyo ulumuddin (Imom G‘azzolliy).</li>
            <li><b>53. </b>Temur tuzuklari (Sohibqiron Amir Temur).</li>
            <li><b>54. </b>Ikki eshik orasi, Dunyoning ishlari (O‘tkir Hoshimov).</li>
            <li><b>55. </b>Nur va soyalar (R. Tagor).</li>
            <li><b>56. </b>Sayohatnoma (ibn Batuta).</li>
            <li><b>57. </b>Mumu (Ivan Turgenev).</li>
            <li><b>58. </b>Cho‘lpon she'rlari.</li>
            <li><b>59. </b>Baxtiyor oila, Ijtimoiy odoblar (Shayx Muhammad Sodiq Muhammad Yusuf).</li>
            <li><b>60. </b>Judolik diyori (Murod Mansur).</li>
            <li><b>61. </b>Riyoziyot un-nafs (Imom G‘azzoliy).</li>
            <li><b>62. </b>Qutadg‘u bilig (Yusuf Xos Hojib).</li>
            <li><b>63. </b>Inson husni (Mirzakalon Ismoiliy).</li>
            <li><b>64. </b>Iymon (Shayx Muhammad Sodiq Muhammad Yusuf).</li>
            
            <li><b>65. </b>Ajdodlarimiz fojiasi (Mirkarim Osim).</li>
            <li><b>66. </b>Tanbehul g‘ofiliyn (Abu Lays Samarqandiy).</li>
            <li><b>67. </b>So‘nggi o‘q (Tohir Malik).</li>
            <li><b>68. </b>Halol nimayu harom nima (Tohir Malik).</li>
            <li><b>69. </b>Rahiq al-maxtum (Safiyyur Rahmon Muborakfuriy).</li>
            <li><b>70. </b>Ochiq xat, Din nasihatdir, Vasatiya, Ixtiloflar, sabablar va yechimlar (Shayx Muhammad Sodiq Muhammad Yusuf).</li>
            <li><b>71. </b>Til nomusi (Ahmad A'zam).</li>
            <li><b>72. </b>Guliston va Bo‘ston (Sa'diy).</li>
            <li><b>73. </b>Jaloliddin Rumiy (Radiy Fish).</li>
            <li><b>74. </b>Shavkat Rahmon she'rlari.</li>
            <li><b>75. </b>Qatlnoma (Nabijon Boqiy).</li>
            <li><b>76. </b>Mahtumquli she'rlari.</li>
            <li><b>77. </b>Jimjitlik, Ufq (Said Ahmad).</li>
            <li><b>78. </b>Yolg‘izlikning yuz yili (Gabriel Markes).</li>
            <li><b>79. </b>Al-kimyogar (Paulo Koelo).</li>
            <li><b>80. </b>Shaytanat (Tohir Malik).</li>
            <li><b>81. </b>Tazkirat ul-avliyo (Fariddin Attor).</li>
            <li><b>82. </b>Qo‘shchinor chiroqlari (Abdulla Qahhor).</li>
            <li><b>83. </b>O‘kinma (Doktor Oiz Qarniy).</li>
            <li><b>84. </b>Ming bir kecha.</li>
            
            <li><b>85. </b>Faust (Gyote).</li>
            <li><b>86. </b>XXI asrda Islom va postmodern dunyoda qiblani topish (Timoti J Uinter).</li>
            <li><b>87. </b>Ichindagi ichindadir (Jaloliddin Rumiy).</li>
            <li><b>88. </b>Sabot ul-ojiziyn (So‘fi Ollohyor).</li>
            <li><b>89. </b>Mukoshafatul qulub (Imom G‘azzolliy).</li>
            <li><b>90. </b>Ulamolar nazdida vaqtning qadri (Abdul Fattoh Abu G‘udda).</li>
            <li><b>91. </b>Sherlok Xolms sarguzashtlari (Artur Konon Doyl).</li>
            <li><b>92. </b>Farengeyt bo‘yicha 451 gradus (Rey Bredberi).</li>
            <li><b>93. </b>Sudxo‘rning o‘limi (Sadriddin Ayniy).</li>
            <li><b>94. </b>Daftar hoshiyasidagi bitiklar (O‘tkir Hoshimov).</li>
            <li><b>95. </b>Bu tog‘lar ulug‘ tog‘lar (Evril Turon).</li>
            <li><b>96. </b>Sariq ajdar hamlasi (Mannop Egamberdiyev).</li>
            <li><b>97. </b>Muvaffaqiyat kaliti (Deyl Karnegi).</li>
            <li><b>98. </b>Masnaviy ma'naviy (Jaloliddin Rumiy).</li>
            <li><b>99. </b>Jarayon (Frants Kafka).</li>
            <li><b>100. </b>Iymonlashish umidi, Ov (Tohir Malik).</li>
            
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Parentsresources;
