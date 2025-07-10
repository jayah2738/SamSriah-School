export interface Mentor {
  name: string;
  profession: string;
  imgSrc: string;
  description: string;
}


export const courseData: {
  heading: string;
  imgSrc: string;
  name: string;
  students: number;
  classes: number;
  price: string;
  rating: number;
}[] = [
    // {
    //   heading: 'Nursery',
    //   imgSrc: '/images/documentation/nursery.jpg',
    //   students: 10,
    //   classes: 1,
    //   price: '200.000',
    //   rating: 4.5,
    //   name: ""
    // },
    {
      heading: 'PreSchool',
      imgSrc: '/images/courses/preschool.png',
      students: 20,
      classes: 4,
      price: '100.000',
      rating: 5,
      name: ""
    },
    {
      heading: 'Primary School',
      imgSrc: '/images/courses/primary.png',
      students: 20,
      classes: 5,
      price: '100.000',
      rating: 5,
      name: ""
    },
    {
      heading: 'Middle School',
      imgSrc: '/images/courses/middle.png',
      students: 20,
      classes: 4,
      price: '100.000',
      rating: 5,
      name: ""

    },
    {
      heading: 'High School',
      imgSrc: '/images/courses/high.png',
      students: 20,
      classes: 7,
      price: '100.000',
      rating: 5,
      name: ""

    }
  ]

export const MentorData = [
  {
    professions: 'English Teacher',
    name: 'Mr.Haja',
    imgSrc: '/images/mentor/haja.jpg',
    StudentsNum: 60,
    description: "I am an enthusiastic English teacher who specializes in helping students build strong reading, writing, and communication skills. With a focus on creativity and critical thinking.",
  },
  {
    professions: 'Physics Teacher',
    name: 'Mr.Manou',
    imgSrc: '/images/mentor/manou.jpg',
    StudentsNum: 100,
    description: "I am a passionate Physics teacher who helps students explore the laws of nature through hands-on experiments and problem-solving, encouraging logical thinking and curiosity.",
  },
  {
    professions: 'Informatics Teacher',
    name: 'Mr.Mika',
    imgSrc: '/images/mentor/mika.jpg',
    StudentsNum: 20,
    description: "I am a dedicated Informatics teacher who introduces students to the world of coding, digital tools, and problem-solving, fostering creativity and technical skills.",
  },
  {
    professions: 'Science Teacher',
    name: 'Mr.Tojo',
    imgSrc: '/images/mentor/tojosvt.jpg',
    StudentsNum: 80,
    description: "I am an enthusiastic Science teacher who inspires students to discover the natural world through inquiry-based learning and scientific exploration.",
  },
  {
    professions: 'H&G Teacher',
    name: 'Mr.Christian',
    imgSrc: '/images/mentor/mr.christian.jpg',
    StudentsNum: 100,
    description: "I am a committed History & Geography teacher who brings the past to life, helping students develop critical thinking by understanding historical events and their impact.",
  },
  {
    professions: 'Malagasy Teacher',
    name: 'Ms.Finaritra',
    imgSrc: '/images/mentor/finaritra.jpg',
    StudentsNum: 100,
    description: "I am a proud Malagasy teacher who helps students to learn our Native Language while appreciating the richness of our culture and traditions.",
  },
  {
    professions: 'French Teacher',
    name: 'Mrs.Lova',
    imgSrc: '/images/mentor/lovafr.jpg',
    StudentsNum: 100,
    description: "I am a French teacher who helps students strengthen their language skills while discovering new culture and traditions.",
  },
  {
    professions: 'Informatics Teacher',
    name: 'Mrs.Mirindra',
    imgSrc: '/images/mentor/mirindra.jpg',
    StudentsNum: 40,
    description: "It's my passion to help students grow smartly! Skills make you different! ",
  },{
    professions: 'Informatics Teacher',
    name: 'Mrs.Malalatiana',
    imgSrc: '/images/mentor/malalatiana.jpg',
    StudentsNum: 60,
    description: "I help students achieve their goals, mainly about informatics. Let's achieve it together! ",
  },
  {
    professions: 'S.E.S/ENG teacher',
    name: 'Mrs.Lova',
    imgSrc: '/images/mentor/lovabe.jpg',
    StudentsNum: 100,
    description: "I am an engaged SES teacher who supports students in understanding social structures, economic systems, and their role as active citizens.",
  }, {
    professions: 'Philosophy teacher',
    name: 'Mrs.Maria',
    imgSrc: '/images/mentor/maria.jpg',
    StudentsNum: 100,
    description: "I am a passionate philosophy teacher who helps students explore big questions, think critically, and understand different perspectives on life, ethics, and knowledge.",
  },
  {
    professions: 'Grade 4 Teacher',
    name: 'Ms.Lucy',
    imgSrc: '/images/mentor/lucy.jpg',
    StudentsNum: 20,
    description: "I am a caring Grade 4 teacher who supports students in building strong foundations in literacy, numeracy, and social skills through engaging and inclusive learning.",
  },
  ,
  {
    professions: 'PS Teacher',
    name: 'Mrs.Lanto',
    imgSrc: '/images/mentor/mme.lanto.jpg',
    StudentsNum: 20,
    description: "I am a nurturing TPS teacher who helps young children take their first steps in learning through play, exploration, and gentle guidance.",
  },
  {
    professions: 'MS Teacher',
    name: 'Mrs.Stephanie',
    imgSrc: '/images/mentor/mme.stephanie.jpg',
    StudentsNum: 20,
    description: "I am a supportive PS teacher who encourages curiosity and confidence as young learners begin their educational journey through games and discovery.",
  },
  {
    professions: "GS Teacher",
    name: 'Mrs.Perline',
    imgSrc: '/images/mentor/mamie.jpg',
    StudentsNum: 20,
    description: "I am a joyful GS teacher who helps children develop language, motor, and social skills through creative, age-appropriate activities.",
  },
  {
    professions: "TPS Teacher",
    name: 'Ms.Ravaka',
    imgSrc: '/images/mentor/ravaka.jpg',
    StudentsNum: 20,
    description: "I am a committed TPS teacher who prepares children for primary school by building early literacy, numeracy, and independence in a fun, caring environment.",
  },
]

export const TestimonialData: { profession: string; comment: string; imgSrc: string; name: string; rating: number; }[] = [
  {
    name: "Laza",
    profession: "Finidy's Parent",
    comment: "It's so wonderful to study in 3S. I have four children and they are in a different grades. Just the first week of the first school year and I saw that my children have become intelligent. Thank you so much 3S",
    imgSrc: '/images/testimonial/user.svg',
    rating: 5
  },
  {
    name: "Sandra",
    profession: "Ckeziah's Parent",
    comment: "Enrolling our daughter at SamSriah School was the best decision we ever made. Her confidence has soared, and she’s consistently achieving top scores. We’re so proud of her progress!",
    imgSrc: '/images/mentor/user2.png',
    rating: 5
  },
  {
    name: "Rija",
    profession: "Nick's Parent",
    comment: "The dedication of the teachers is outstanding. Our son won his first science fair because of the school’s focus on hands-on learning. We’re beyond grateful.",
    imgSrc: '/images/mentor/user3.png',
    rating: 5
  },
  {
    name: "Niry",
    profession: "Kaysha's Parent",
    comment: "Our child went from shy and quiet to class president in one year. The school nurtures leadership in such a natural and encouraging way.",
    imgSrc: '/images/mentor/user1.png',
    rating: 5
  },
  {
    name: "Rovaniaina",
    profession: "Cando's Parent",
    comment: "We’ve seen a huge improvement in our son's reading and writing skills. The teachers tailor learning to each child – and it shows in the results.",
    imgSrc: '/images/mentor/user2.png',
    rating: 5
  },
  {
    name: "Odon",
    profession: "fifaliana's Parent",
    comment: "Thanks to the school’s incredible support, our daughter is really motivated to achieve her dream. This place truly prepares kids for the future.",
    imgSrc: '/images/mentor/user3.png',
    rating: 5
  },
  {
    name: "Olga",
    profession: "Elidah's Parent",
    comment: "The school's program is phenomenal. My daughter is now 10th grade and absolutely loves learning.",
    imgSrc: '/images/mentor/user3.png',
    rating: 5
  },
  {
    name: "Solofo",
    profession: "Anaïs' Parent",
    comment: "I appreciate how the school teaches character alongside academics. Our child is thriving not just as a student, but as a kind, responsible human being.",
    imgSrc: '/images/mentor/user3.png',
    rating: 5
  },
  {
    name: "Garcia",
    profession: "Hantatiana's Parent",
    comment: "The school helps my daughter discover her talent in coding, desgning and many more about informatics. That leads my daughter to a new life and the best ever.",
    imgSrc: '/images/mentor/user3.png',
    rating: 5
  },
  {
    name: "Malala",
    profession: "Samilia's Parent",
    comment: "We’ve been part of the school community for five years, and every year we see new achievements. It just keeps getting better.",
    imgSrc: '/images/mentor/user3.png',
    rating: 5
  },
]

