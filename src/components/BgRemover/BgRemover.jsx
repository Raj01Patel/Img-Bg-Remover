import React, { useState } from 'react'

function BgRemover() {
    const [image, setImage] = useState(null);
    const [bgRemove, setBgRemove] = useState(null);


    const handleRemoveBackground = async () => {
        const apiKey = "jnZtc8SjeHvpcVkSwyCEy8pe"
        const apiUrl = "https://api.remove.bg/v1.0/removebg"

        const formData = new FormData();
        formData.append("image_file", image, image.name);
        formData.append("size", 'auto');

        try {
            const res = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'X-Api-Key': apiKey
                },
                body: formData
            })

            const data = await res.blob();

            const reader = new FileReader();
            reader.onloadend = () => setBgRemove(reader.result)
            console.log(reader.result);
            reader.readAsDataURL(data);
        } catch (error) {
            console.log(error)
        }
    }

    console.log(image)

    return (
        <div>
            <div className='flex justify-center'>
                <div>

                    <div className="input">
                        <div className="input border border-gray-700 px-2 py-2 mt-4 mb-5 rounded-lg bg-white">
                            <input
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                                className="text-sm text-gray-500 file:mr-5 file:py-1 file:px-3  file:text-xs file:font-medium file:border-0 file:rounded-md file:bg-black file:text-white hover:file:cursor-pointer hover:file:bg-white hover:file:text-black lg:w-[40em]"
                            />
                        </div>


                        <div className="flex justify-center mb-5">
                            <button
                                type="button"
                                onClick={handleRemoveBackground}
                                className="text-black border-2 border-solid border-black  font-medium  rounded-lg text-sm px-5 py-2.5 text-center hover:bg-black hover:text-white"
                            >
                                Remove Background
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-1 mb-5 ">
                        {image && <div className="border-2 border-gray-500 rounded-l-lg border-dashed flex justify-center p-2 w-40 lg:w-80">
                            <img className="w-90 h-90" src={image ? URL.createObjectURL(image) : ""} alt="" />
                        </div>}

                        {bgRemove && <div className="border-2 border-gray-500 rounded-r-lg border-dashed flex justify-center p-2 w-40 lg:w-80">
                            <img className="w-90 h-90" src={bgRemove} alt="img" />
                        </div>}
                    </div>

                    {bgRemove && <div className="flex justify-center">
                        <a className='w-full' href={bgRemove} download={'save.png'}>
                            <button className=' bg-white text-black  rounded-lg border-2 border-black w-full py-2 px-3 hover:bg-black hover:text-white'>Download</button>
                        </a>
                    </div>}

                </div>

            </div>
        </div>
    )
}

export default BgRemover