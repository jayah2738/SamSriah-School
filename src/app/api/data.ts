export const TestimonialData = [
  {
    name: "John Doe",
    profession: "Grade 10 Student",
    imgSrc: "/images/testimonials/student1.jpg",
    rating: 4.5,
    comment: "Samsriah School has provided me with an excellent learning environment. The teachers are supportive and the facilities are top-notch.",
    date: "March 2024",
    class: "Grade 10"
  },
  {
    name: "Jane Smith",
    profession: "Grade 8 Student",
    imgSrc: "/images/testimonials/student2.jpg",
    rating: 5,
    comment: "I love the extracurricular activities and the friendly atmosphere. The teachers make learning fun and engaging.",
    date: "February 2024",
    class: "Grade 8"
  },
  {
    name: "Michael Johnson",
    profession: "Grade 12 Student",
    imgSrc: "/images/testimonials/student3.jpg",
    rating: 4.8,
    comment: "The academic support and career guidance have been invaluable. I feel well-prepared for my future.",
    date: "January 2024",
    class: "Grade 12"
  },
  {
    name: "Sarah Williams",
    profession: "Grade 9 Student",
    imgSrc: "/images/testimonials/student4.jpg",
    rating: 4.7,
    comment: "The school's focus on both academics and character development has helped me grow in many ways.",
    date: "December 2023",
    class: "Grade 9"
  }
];

export interface Mentor {
  name: string;
  profession: string;
  imgSrc: string;
  description: string;
}

export const MentorData: Mentor[] = [
  {
    name: "Mr. Haja",
    profession: "Mathematics Teacher",
    imgSrc: "/images/mentors/haja.jpg",
    description: " Math teacher specializing in algebra, geometry, and calculus. Focus on problem-solving techniques and exam preparation."
  },
  {
    name: "Mr. Manou",
    profession: "Science Teacher",
    imgSrc: "/images/mentors/manou.jpg",
    description: " Science teacher covering physics, chemistry, and biology. Hands-on experiments and lab work for practical learning."
  },
  {
    name: "Mr. Tojo",
    profession: "English Teacher",
    imgSrc: "/images/mentors/tojo.jpg",
    description: " English teacher focusing on grammar, literature, and composition. Developing writing and communication skills."
  },
  {
    name: "Mr. Vonjy",
    profession: "History Teacher",
    imgSrc: "/images/mentors/vonjy.jpg",
    description: " History teacher covering world history and cultural studies. Interactive lessons with focus on critical thinking."
  },
  {
    name: "Ms. Finaritra",
    profession: "French Teacher",
    imgSrc: "/images/mentors/finaritra.jpg",
    description: " French teacher teaching language fundamentals and conversation. Emphasis on speaking and listening skills."
  },
  {
    name: "Mrs. Lova",
    profession: "Art Teacher",
    imgSrc: "/images/mentors/lova.jpg",
    description: " Art teacher instructing in drawing, painting, and design. Developing creative skills and artistic expression."
  },
  {
    name: "Ms. Lucy",
    profession: "Physical Education",
    imgSrc: "/images/mentors/lucy.jpg",
    description: " PE teacher organizing sports, fitness, and team activities. Promoting physical health and teamwork."
  },
  {
    name: "Mrs. Perline",
    profession: "Music Teacher",
    imgSrc: "/images/mentors/perline.jpg",
    description: " Music teacher teaching instruments, theory, and performance. Developing musical skills and appreciation."
  },
  {
    name: "Ms. Ravaka",
    profession: "Computer Science",
    imgSrc: "/images/mentors/ravaka.jpg",
    description: " Computer teacher covering programming, digital skills, and IT. Practical projects and coding exercises."
  }
]; 