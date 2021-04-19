import React from 'react';
import Style from './blog.module.css';
import BlogPost from './blogPost';
import { Grid, Container, } from "@material-ui/core";

export default function Blog() {
    return (
        <div className={Style.blogArea}>
            <Container>
                <div className={Style.titleArea}>
                    <h3 className={Style.title}>FROM OUR BLOG</h3>
                    <h4 className={Style.subTitle}>
                        Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius claritas
                        est etiam processus dynamicus, qui sequitur mutationem.
                    </h4>
                </div>
                <Grid container>
                    <Grid item xs={6}>
                        <BlogPost />
                    </Grid>
                    <Grid item xs={6}>
                        <BlogPost />
                    </Grid>
                    <Grid item xs={6}>
                        <BlogPost />
                    </Grid>
                    <Grid item xs={6}>
                        <BlogPost />
                    </Grid>
                </Grid>

            </Container>
        </div>
    )
}
