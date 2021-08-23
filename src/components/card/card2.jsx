import React from 'react'
import Card3 from './card3'
export default function card2() {
    let array=
    [
        {
            src:"https://th.bing.com/th/id/OIP.kkp6f5O11vcvih9YnqVf_QHaEb?pid=ImgDet&rs=1",
            title:"fast as light",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor molestiae commodi aut! Repellendus, quod.",
            val:40
        },
        {
            src:"https://www.techreviewer.co.uk/wp-content/uploads/2014/03/tesla.jpg",
            title:"smooth as butter",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor molestiae commodi aut! Repellendus, quod.",
            val:68
        },
        {
            src:"https://cdn.static-carindigo.com/tr:w-830,h-582,ow-71.481481481481,oi-carindigo@images@carindigo_logo_white.png,ox-10,oy-10,di-no_image_SJKGShVtN.png/images/news/featured_2021-tesla-model-s-plaid-can-do-0-60-in-less-than-1-99-s-quarter-mile-run-in-9-23-seconds_1611913228.jpeg",
            title:"stylish as a suit",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor molestiae commodi aut! Repellendus, quod.",
            val:70
        }
    ]
    return (
        <div>
               <div className="xyz p-3">
            <div className="card-heading2 pt-5">
                <h1 className="text-uppercase text-center display-6">Latest Model</h1>  
            </div>
            <div className="d-flex justify-content-center">
                <span className="card-span"></span>
            </div>
            <div className="card-para-2 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quibusdam non dolorum, facere doloribus, nostrum illo delectus dolore, pariatur sapiente vitae quia dolorem! Nihil porro totam enim ab ea dignissimos autem. Veritatis consectetur quibusdam similique!
            </div>
            <div className="row">
                <div className="col-12 ">
                    
                    <div className="d-flex justify-content-between">
                        {
                            array.map(data=>{
                                return(
                                <Card3 src={data.src} title={data.title} desc={data.desc} val={data.val}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
