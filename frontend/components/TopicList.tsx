import { SAMPLE_TOPICS } from '@/data/question';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
type TopicListProps={
    loading?:boolean;
    topics?:{description:string;name:string;slug:string}[]
}
function SkeletonPlaceholder() {
    return (
      <div className="block p-6 bg-gray-300 animate-pulse text-gray-300 rounded-lg shadow-lg">
        <div className="w-[20rem] h-4 bg-gray-400 rounded mb-4"></div>
        <div className="h-4 bg-gray-400 rounded mb-2"></div>
        <div className="h-4 bg-gray-400 rounded"></div>
      </div>
    );
  }
export default function TopicList({topics=SAMPLE_TOPICS}:TopicListProps) {
    const [loading, setLoading] = useState(true);
   

    useEffect(() => {
      // Simulate loading time
      const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
      return () => clearTimeout(timer);
    }, []);
  return (
    <>
     <div className="text-center mb-12">
         {!!topics.length && <>
            <h1 className="text-5xl font-extrabold mb-4">Quiz App</h1>
            <p className="text-xl">Select a topic to start your test</p>
         </>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {loading
            ? Array(6) // Adjust the number based on how many skeletons you want
                .fill(0)
                .map((_, index) => <SkeletonPlaceholder key={index} />)
            : topics.map(({ description, name, slug }) => (
                <Link href={`/test?topic=${slug}`} legacyBehavior key={slug}>
                  <a className="block p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
                    <h2 className="text-3xl font-semibold mb-2">{name}</h2>
                    <p className="text-gray-700">{description}</p>
                  </a>
                </Link>
              ))}
        </div>
    </>
  )
}
