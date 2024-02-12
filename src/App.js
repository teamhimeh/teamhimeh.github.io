import logo from './logo.svg';
import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import i18n from './i18n/config.ts';

function App() {
  return (
    <Container>
    <Row className="mt-4">
      <Col md={4}>
        <Image src="himeshi.jpg" alt="Himeshi" fluid rounded />
      </Col>
      <Col md={8}>
        <h1>平井亨武</h1>
        <h2>iOSエンジニア</h2>
        <p>実務経験3年程度のiOSエンジニアです。iOSアプリ開発の他にもいくつかの領域で開発経験があります。</p>
        <h3>関わっているプロジェクト</h3>
        <ListGroup>
          <ListGroup.Item>
          <a href="https://github.com/teamhimesh/Simutrans-OpenTTD-patch">Simutrans OTRP</a>
              <p>Simutransというオープンソースの交通シミュレーションゲームの改良版です。</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="https://routemapmaker.com/">路線図メーカー</a>
              <p>Webブラウザで簡単に路線図を作成できるサービスです。</p>
            </ListGroup.Item>
          </ListGroup>
          <h3>資格</h3>
          <ul>
            <li>情報安全確保支援士試験合格</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
