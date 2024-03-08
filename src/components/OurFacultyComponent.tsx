import React from 'react'
import SudhaMam from '../assets/SudhaMam.jpeg'
import GovardhanaSir from '../assets/GovardhanaSir.jpeg'

interface FacultyMember {
  imageUrl: string;
  name: string;
  description: string;
}

const OurFacultyComponent: React.FC = () => {
  const faculty: FacultyMember[] = [
    {
      imageUrl: SudhaMam,
      name: 'Professor P.V. Sudha, Head of the Department',
      description: 'Professor P.V. Sudha is the Head of the Computer Science and Engineering Department and the Dean of Informatics at OU. She leads the Cloud Computing Research Lab at TDC, UCE(A), specializing in Distributed and Cloud Computing, holding M.Tech and Ph.D. degrees. Her dedication and transformative contributions are widely appreciated.'
    },
    {
      imageUrl: GovardhanaSir,
      name: 'Dr. I. Govardhana Rao, Faculty Convenor',
      description: 'Dr. I. Govardhana Rao, with an M.Tech degree, serves as our Assistant Professor in the department of Computer Science and Engineering, demonstrating profound expertise in information security.His dedication and commitment to enriching our academic community are admired, with a focus on continuous improvement'
    }
  ];

  return (
    <div className="py-10 my-10 h-auto items">
      <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8">
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          OUR ELITE{' '}
          <span className="inline bg-gradient-to-r from-[#7fbaf4]  to-[#6d00fc] text-transparent bg-clip-text">
            FACULTY
          </span>
        </p>
      </h2>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row max-w-[1000px]">
        {faculty.map((member, index) => (
          <div key={index} className="flex flex-col items-center lg:w-1/2 lg:order-2 mt-4">
            <img src={member.imageUrl} alt={member.name} className="w-2/3 lg:w-2/3 mx-auto" />
            <div className="lg:w-2/3 mt-6">
              <h3 className="text-2xl font-semibold text-white text-center lg:text-center">{member.name}</h3>
              <p className="mt-2 text-white text-center lg:text-center">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFacultyComponent