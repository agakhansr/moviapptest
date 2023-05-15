import React from 'react'
import Image from 'next/image'

const getMovie = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    return res.json()
}

const Page = async ({ params }) => {
    const id = params.id;
    const movieDetail = await getMovie(id)

    console.log(movieDetail, "movieDetail")

    console.log(id, "id")
    return (
        <div className='relative p-7 min-h-screen '>
            <Image style={{ objectFit: "cover" }} fill src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`} />
            <div className='absolute'>
                <div className='text-4xl font-bold my-3 '>{movieDetail?.title}</div>
                <div className='w-1/2'>{movieDetail?.overview}</div>
                <div className='my-5'>{movieDetail?.release_date} - {movieDetail?.vote_average}</div>
                <div className='my-5 border w-32 p-2 rounded text-center text-lg cursor-pointer hover:bg-white hover:text-black transition-all'>Trail</div>
            </div>
        </div>
    )
}

export default Page
