import React, { useRef } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import "./Carousel.scss";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import PosterFallback from "../../assets/no-poster.png"
import Img from "../lazyLoadImage/Img";
import Rating from "../Rating/Rating";

function Carousel({ data, loading }) {

    const carouselContainer = useRef();
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();


    const skItem = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        )
    }


    return (
        <div className="carousel">
            <ContentWrapper>

                {!loading ? (
                    <div className="carouselItems">
                        {data?.map((item) => {

                            const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback;

                            return (
                                <div key={item.id} className="carouselItem">

                                    <div className="posterBlock">
                                        <Img src={posterUrl} />
                                        <Rating rating={item.vote_average.toFixed(1)}/>
                                    </div>
                                    <div className="textBlock">
                                        <div className="title">
                                            {item.title || item.name}
                                        </div>
                                        <div className="date">
                                            {dayjs(item.release_date).format("MMM DD, YYYY")}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className="loadingSkeleton">
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                    </div>
                )}
            </ContentWrapper>
        </div >
    )
}

export default Carousel