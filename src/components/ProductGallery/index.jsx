import React from 'react'
import style from './PDGallery.module.css';

import {
    Container,
    Tab,
    Tabs
} from "@material-ui/core";
import SlickSlider from '../SlickSlider';

export default function ProductGallery() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={style.gallery} >
            <div className={style.tileGallery}>
                <h3 className={style.title}>OUR IN STORE</h3>
                <h4 className={style.subTitle}>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius claritas est etiam processus dynamicus, qui sequitur mutationem.</h4>
            </div>
            <div className="TagBox">

                <Tabs classes={{indicator:style.tabsIndicator}} className={style.tabs} value={value} onChange={handleChange} centered>
                    <Tab classes={{wrapper:style.tab,}} label="FEATURED PRODUCTS" />
                    <Tab classes={{wrapper:style.tab,}} label="BEST SELLER" />
                    <Tab classes={{wrapper:style.tab,}} label="NEW ARRIVALS" />
                </Tabs>

                <Container>
                    <div className={value === 0 ? style.active : style.fade}>
                        <SlickSlider row={2} />
                    </div>
                    <div className={value === 1 ? style.active : style.fade}>
                        <SlickSlider row={2} />
                    </div>
                    <div className={value === 2 ? style.active : style.fade}>
                        <SlickSlider row={2} />
                    </div>
                </Container>
            </div>

        </div>
    )
}
