import { Component } from "react";
import axios from "axios";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

interface Homee {
  poster_path: string;
  title: string;
  duration: string;
  description: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export class Home extends Component<Homee> {
  state = {
    movie: [],
  };
  getMovie() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDI0MjdjMWY3ZmYxZTY5NjE0ZTM0N2U2NGU0NWI0NCIsInN1YiI6IjY0ZGY3OTU0MzcxMDk3MDBjNTFlNzE3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bqUHQyyt9ZAbciDRqJo5fGzRnFf9o4GjojqS3-qn3GQ",
          },
        }
      )
      .then((response) => {
        this.setState({ movie: response?.data?.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount(): void {
    this.getMovie();
  }

 

  render() {
    const { movie } = this.state;
    return (
      <div>
        <Navbar />
        <div className="flex flex-wrap item-center mx-2 my-5 gap-y-5 gap-x-5">
          {movie &&
            movie?.map((item, index) => {
              return (
                <div className="mx-5" key={index}>
                  <Card
                    id={item.id.toString()}
                    poster_path={item?.poster_path}
                    title={item?.title}
                    description={item?.description}
                  />
                  
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Home;
