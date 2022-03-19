import React from 'react';
import Style from './blog.module.css';
import EventIcon from '@material-ui/icons/Event';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
export default function BlogPost() {
    return (
        <div className={Style.blogPostArea}>
            <div className={Style.blogPostItem}>
                <div className={Style.blogThumb}>
                    <a href="/#">
                        <img className={Style.imgBlog} src="//cdn.shopify.com/s/files/1/0248/5823/0872/articles/blog-4_a844aa17-9637-400a-ad3c-cbc331b0b3ca_1024x1024.jpg?v=1569581256" alt="" />
                    </a>
                </div>
                <div className={Style.blogContent}>
                    <h6 className={Style.blogTitle}>
                        <a href="">Sed do eiusmod tempor</a>
                    </h6>
                    <div className={Style.blogMeta}>
                        <div className={Style.author}>
                            <EventIcon/>
                            <p>Fri, Sep 27, 19</p>
                        </div>
                        <div className={Style.author}>
                            <PermIdentityIcon/>
                            <p>Huy Tran</p>
                        </div>
                    </div>
                    <p className={Style.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do...</p>
                    <a className={Style.btnReadMore} href="/#">Read more</a>
                </div>
            </div>

        </div>
    )
}
