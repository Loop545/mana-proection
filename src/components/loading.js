import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import * as sharkData from "../statics/lottie/shark.json";

const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: sharkData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        width: "100%",
        height: "100%",
    }
};

export default class Loading extends  React.Component{
    constructor(props){
        super(props)
        this.state = {
            done: undefined
        }
    }

    componentDidMount() {
        setTimeout(() => {
          fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => this.setState({ done: true }));
        }, 3200);
      }

    render() {
        return(
            <div >
                {!this.state.done ? (
                    <FadeIn>
                        <div style = {{
                            height: "100vh",
                            width: "100vw"
                        }}
                        class="d-flex justify-content-center align-items-center">
                        {!this.state.loading ? (
                            <Lottie options={defaultOptions} height={500} width={500} />
                            ) : (<h1>Hi There</h1>
                        
                        )}
                        </div>
                    </FadeIn>
                 ) : (
                    <></>
                  )}
            </div>
            
        )
    }
}