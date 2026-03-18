import { Idcard } from "@/components/Idcard";
const page = () => {
  const students = [
    {
      name: "Э. Баасандорж",
      gender: "MALE",
      email: "baskaerka763@gmail.com",
      studentCode: "25BS65476",
    },
    {
      name: "Т. Нямбаяр",
      gender: "MALE",
      email: "yunoxsama00@gmail.com",
      studentCode: "25LP7381",
    },
    {
      name: "Л. Дөлгөөнзул",
      gender: "FEMALE",
      email: "dolgoonlkhagva@gmail.com",
      studentCode: "26BS86071",
    },
    {
      name: "Г. Номин",
      gender: "FEMALE",
      email: "gnomin200408@gmail.com",
      studentCode: "25BS52373",
    },
    {
      name: "Л. Няамочир",
      gender: "MALE",
      email: "nyamochir.lkhamkhvv@gmail.com",
      studentCode: "26BS98744",
    },
    {
      name: "М. Азноров",
      gender: "FEMALE",
      email: "azaamunkhtn@gmail.com",
      studentCode: "25LP1286",
    },
    {
      name: "Б. Билэгсайхан",
      gender: "MALE",
      email: "bbek3201@gmail.com",
      studentCode: "26BS83263",
    },
    {
      name: "Ш. Батмагнай",
      gender: "MALE",
      email: "sbatmagnai25@gmail.com",
      studentCode: "25LP6073",
    },
    {
      name: "Б. Чинзориг",
      gender: "MALE",
      email: "chinzoobatbold11@gmail.com",
      studentCode: "26BS13491",
    },
    {
      name: "Б. Гаажадамба",
      gender: "MALE",
      email: "gaajadamba@gmail.com",
      studentCode: "26BS25985",
    },
    {
      name: "О. Анударь",
      gender: "FEMALE",
      email: "anudariochiredene@gmail.com",
      studentCode: "26BS80134",
    },
    {
      name: "Б. Мөнх Оргил",
      gender: "MALE",
      email: "suusiibat@gmail.com",
      studentCode: "26BS63531",
    },
    {
      name: "К. Өрнүүн",
      gender: "MALE",
      email: "urnuun919@gmail.com",
      studentCode: "25BS21438",
    },
    {
      name: "Т. Батхүлэг",
      gender: "MALE",
      email: "t.khuleg@gmail.com",
      studentCode: "26BS38301",
    },
    {
      name: "Б. Цолмон",
      gender: "MALE",
      email: "btsolmon.mn@gmail.com",
      studentCode: "26BS11043",
    },
    {
      name: "А. Билгүүнтөгс",
      gender: "MALE",
      email: "bilgntgsamarbayr@gmail.com",
      studentCode: "26BS10652",
    },
    {
      name: "Ц. Номин Эрдэнэ",
      gender: "FEMALE",
      email: "nominerdenetsogtbaatar5@gmail.com",
      studentCode: "26BS60931",
    },
    {
      name: "Э. Номин Эрдэнэ",
      gender: "FEMALE",
      email: "ne78693@gmail.com",
      studentCode: "26BS42529",
    },
    {
      name: "А. Баярбилэг",
      gender: "MALE",
      email: "bayarbileg.am@gmail.com",
      studentCode: "26BS44296",
    },
    {
      name: "М. Темүүлэн",
      gender: "MALE",
      email: "azeroth0017@gmail.com",
      studentCode: "26BS99683",
    },
    {
      name: "Б. Баярцогт",
      gender: "MALE",
      email: "bayartsogt9998@gmail.com",
      studentCode: "26BS96881",
    },
    {
      name: "Б. Мянганнаст",
      gender: "MALE",
      email: "myngannast.b@gmail.com",
      studentCode: "26BS98039",
    },
  ];
  return (
    <div className="flex flex-wrap gap-5 m-5 justify-center">
      {students.map((element, key) => {
        return (
          <Idcard
            key={key}
            name={element.name}
            gender={element.gender}
            email={element.email}
            studentCode={element.studentCode}
          />
        );
      })}
    </div>
  );
};

export default page;
