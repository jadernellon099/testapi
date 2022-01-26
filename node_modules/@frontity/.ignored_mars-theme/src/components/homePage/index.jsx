import React, { useState, useEffect } from 'react';
import { styled, css } from 'frontity';
import axios from 'axios';
import ImageGif from '../../container/ImageGif';
import { Helmet } from "react-helmet";

const Container = styled.div`
    max-width: 1111px;
    margin: 0;
    padding-top: 5px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & img{
      width: 49.7%;
      margin-bottom: 6px ;
    }
`;

function homePage(props) {

    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        const data = await axios.get('http://localhost/test-api/')
        setResult(data.data.results);
    };
    useEffect(() => {
        getData();
        setLoading(false);
    }, [])

    const listTable = () => {
        if (result && result.length > 0) {
            const dat = result.map((dt, index) => {
                var date = new Date(dt.time * 1000);
                console.log(date.getDate());
                return (
                    <Table key={index}>
                        <tbody>
                            <tr>
                                <th>Thời gian</th>
                                <th css={css`width: 50%`}>{dt.league.name}</th>
                                <th>Tỉ số</th>
                                <th>1</th>
                                <th>x</th>
                                <th>2</th>
                            </tr>
                            <tr>
                                <td>{date.getDate()}/{date.getMonth() +1 }</td>
                                <td>{dt.away.name}<br></br> {dt.home.name}</td>
                                <td>{dt.ss}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                )
            })
            return dat;
        }
    }

    return (
        <Container>
            <ImageGif />
            {loading === false ? listTable() : "loading"}
            <iFrame src='http://localhost/test/' name='the-iFrame' width="100%" height="1000px" frameBorder='0'></iFrame>
        </Container>
    );
}

export default homePage;

const Table = styled.table`
    width: 100%;
    text-align: left;
    background: white;
`;

const ThHead = styled.head`
    width: 50%;
`