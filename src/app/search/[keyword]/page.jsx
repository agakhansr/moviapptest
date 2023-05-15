import Movies from '@/components/Movies'
import React from 'react'

const Page = async ({ params }) => {
    const keyword = params.keyword

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${keyword}&language=en-US&page=1`)
    const data = await res.json()

    console.log(keyword, "keyword")
    return (
        <div>
            {
                !data?.results ?
                    <div>Not Found</div> :
                    <div className='flex items-center flex-wrap gap-2'>
                        {
                            data?.results?.map((dt, i) => (
                                <Movies dt={dt} key={i} />
                            ))
                        }
                    </div>
            }
        </div >
    )
}

export default Page
