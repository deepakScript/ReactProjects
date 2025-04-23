import React from 'react'

const ProductDescription = () => {
    return (
        <div className='ring-1 ring-slate-900/10 rounded-lg'>
            <div className='flex gap-3'>
                <button className='medium-14 p-3 w-32'>Description</button>
                <button className='medium-14 p-3 w-32' >Care Guide</button>
                <button className='medium-14 p-3 w-32' >Size Guide</button>
            </div>
            <hr className='h-[1px] w-full ' />
            <div className='flex flex-col gap-5 p-5'>
                <div>
                    <h5 className='h5'>Detail</h5>
                    <p className='text-sm'>Lorem ipsum dolor s blanditiis consectetur voluptatibus sint culpa, autem porro nemo ab libero quis nobis fugiat. Quidem aut repellendus temporibus?</p>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur  consectetur voluptatibus sint culpa, autem porro nemo ab libero quis nobis fugiat. Quidem aut repellndus temporibus?</p>
                </div>
                <div>
                    <h5 className='h5'>Benefit</h5>
                    <ul className='list-disc pl-5 text-sm text-gray-30
                    flex flex-col gap-2'>
                        <li>
                            lestiae. Libero nam repellendus repudiandae praesentium repella adawerarawerwerwer
                        </li>
                        <li>
                            lestiae. Libero nam repellendus repudiandae praesentium repella adawerarawerwerwer
                        </li>
                        <li>
                            lestiae. Libero nam repellendus repudiandae praesentium repella adawerarawerwerwer
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription
