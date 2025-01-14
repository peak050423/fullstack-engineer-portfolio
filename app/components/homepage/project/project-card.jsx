// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

function ProjectCard({ project }) {

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] p-2 rounded-lg relative group"
    >
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={project?.cover_image}
          height={1080}
          width={1920}
          alt="image"
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          {/* <p>{timeConverter(project.published_at)}</p> */}
          <p></p>
          <div className="flex items-center gap-3">
            {/* <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{project.public_reactions_count}</span>
            </p> */}
            {project.comments_count > 0 &&
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{project.comments_count}</span>
              </p>
            }
          </div>
        </div>
        <Link target='_blank' href={project.url}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {project.title}
          </p>
        </Link>
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;