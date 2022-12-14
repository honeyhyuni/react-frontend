import React from "react";
import Axios from "axios";
import {Card, Row, Col} from "antd";

class EpisodeDetail extends React.Component{
    state ={
        episode: this.props.episode,
    }
    render(){
        const {episode:{id, name, image:{medium: thumbUrl}}} = this.state;
        return(
            <Card 
            style={{width: 240}}
            cover={<img alt={name} src={thumbUrl} />}>
            <Card.Meta title={name} />
            </Card>
        );
    }
}

class EpisodeList extends React.Component{
    state = {
        episodeList: [],
    }

    async componentDidMount() {
        const apiUrl = "http://api.tvmaze.com/singlesearch/shows";
        const params = {
            q: "diseney",
            embed: "episodes",
        };
        try{
            const response = await Axios.get(apiUrl, {params})
            const {data: {_embedded:{episodes}}} = response;
            this.setState({
            episodeList: episodes,
        })
        }
        catch(error){
            console.error(error);
        }
    }

    render(){
        const {episodeList} = this.state
        return(
            <div>
                <h1>EpisodeList</h1>
                <Row>
                {
                    episodeList.map(episode => 
                        <Col span={8}>
                            <EpisodeDetail episode = {episode} />
                        </Col>
                    )
                }
                {/* {JSON.stringify(episodeList)} */}
                </Row>
            </div>
        );
    }
}


export default EpisodeList;