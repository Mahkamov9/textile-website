import React from 'react';
import './Article.css';



export default function Article() {
  return (
    <>
        <div className="article">
                <div className="article-box">
                    <div className="article-right">
                        <p className='article-right-subtext'>
                            We make legal <br /> forms easy.
                        </p>
                        <a className='article-right-btn' href="#">Book an Appointment</a>
                    </div>
                    <div className="article-left">
                        <p className='article-right-subtext'>
                            We make legal <br /> forms easy.
                        </p>
                        <p className='article-right-subtext'>
                            Accordion +
                        </p>
                    </div>
                </div>
        </div>
    </>
  )
}
