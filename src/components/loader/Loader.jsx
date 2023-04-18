import React from 'react';

import LottieLoader from 'react-lottie-loader';
import loader from '../../assets/icons/loader.json';
import './loader.css'
const Loader = props => {
    return (
        props.loading ?
            <div className={'alpha_loader_main_container'}>
                <LottieLoader className='alpha_loader_style' animationData={loader} />
            </div>
            :
            <div />
    );
};

export default Loader

