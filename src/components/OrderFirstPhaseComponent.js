import NavbarBottom from './NavbarComponent';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import {useState} from "react";
import { useNavigate } from "react-router-dom"

function OrderFirstPhase() {

    const dish1 = 'dish-1';
    const dish2 = 'dish-2';
    const dish3 = 'dish-3';
    const dish4 = 'dish-4';

    const navigate = useNavigate();

    const [chosenDish, setChosenDish] = useState('');

    const backgroundColorClass = 'bg-primary';
    const card = 'bg-light my-2 selectable-card';
    const selectedCard = 'my-2 selectable-card border border-primary'

    let selectCard = (id) => {
        localStorage.setItem('firstDish', id);
        setChosenDish(id);
    }

    let Next = () => {
        navigate('/order/second');
    }

    let Back = () => {
        navigate('/');
    }

    return (
        <>
            <Container className={'main-container'}>
                <div className={'mt-2'}>
                    <Button variant={'light'} className={'rounded-circle'} onClick={ () => Back() }>
                        <MdOutlineArrowBackIosNew size={25}/>
                    </Button>
                </div>
                <Row>
                    <Col className={'text-center'}>
                        <span className={"dot " + backgroundColorClass} />
                        <p>First course</p>
                    </Col>
                    <Col className={'text-center'}>
                        <span className="dot"/>
                        <p>Second course</p>
                    </Col>
                    <Col className={'text-center'}>
                        <span className="dot"/>
                        <p>Side dish</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className={'text-center'}>Choose first course</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className={'text-center'}>only choose one item</p>
                    </Col>
                </Row>
                <Card className={ chosenDish === dish1 ? selectedCard : card }
                onClick={ () => selectCard(dish1) }>
                    <Card.Body className={'p-2'}>
                        <Row className={'align-items-center text-center'}>
                            <Col>
                                <h4>Pasta Carbonara</h4>
                            </Col>
                            <Col>
                                <img
                                    src="https://www.thespruceeats.com/thmb/IMCefeyo5_Rur7Rubauttz_rH58=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/pasta-carbonara-recipe-5210168-hero-01-80090e56abc04ca19d88ebf7fad1d157.jpg"
                                     alt="Pasta Carbonara"
                                    className="img-thumbnail"
                                     height={150} width={200}/>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className={ chosenDish === dish2 ? selectedCard : card }
                      onClick={ () => selectCard(dish2) }>
                    <Card.Body className={'p-2'}>
                        <Row className={'align-items-center text-center'}>
                            <Col>
                                <h4>Pasta/Riso in Bianco</h4>
                            </Col>
                            <Col>
                                <img src="https://i.pinimg.com/originals/82/76/0d/82760dd69c89f828cae05b14f5608e2a.jpg"
                                     alt="Pasta/Riso in Bianco"
                                     className="img-thumbnail"
                                     height={150} width={200}/>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className={ chosenDish === dish3 ? selectedCard : card }
                      onClick={ () => selectCard(dish3) }>
                    <Card.Body className={'p-2'}>
                        <Row className={'align-items-center text-center'}>
                            <Col>
                                <h4>Pasta Pomodoro</h4>
                            </Col>
                            <Col>
                                <img src="data:image/jpeg;base64,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"
                                     alt="Pasta Pomodoro"
                                     className="img-thumbnail"
                                     height={150} width={200}/>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className={ chosenDish === dish4 ? selectedCard : card }
                      onClick={ () => selectCard(dish4) }>
                    <Card.Body className={'p-2'}>
                        <Row className={'align-items-center text-center'}>
                            <Col>
                                <h4>Chicken Escalopes</h4>
                            </Col>
                            <Col>
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHIAzAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xAA6EAACAQMDAgUCAwYGAQUAAAABAgMABBEFEiEGMRMiQVFhMnEUgZEHI0JSobEkM8HR4fBiFSVDovH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEAAX/xAAmEQACAgIBBAIBBQAAAAAAAAAAAQIRAzEhBBITQSIyFDNRcbHw/9oADAMBAAIRAxEAPwDn988OxTC3Prigw27gtxUlzpFwlw0aelQfgLtTgVi/GlFUW8qZIEQeletsx7GvFsLw0TbaNNKwDk5z70fx5neRABXcQFGTmrF0/BIjA81YOn+lIJAHkAz7VZ06XijXMQAI9K6GWGOVPYrTkKrC4eOQZPFWuFkmQFWG7FKjpBTgjn4qeKzliwUyMVshnUtEJQG0JloqEOZBu7UuW78ADxZFXHuagm6msrf65wSPQVYWmXW3gGwGotROIii9yMCqdb9dpcTJaWcTSSucKMVYJbpbWzN1qMqxgLlix7Uoz/Y9srZbeLYvLd2PzUrZH0Dn3rn97+0SFrzbZp/h1/iP8dEw/tEtW+uEg11oHay8RMFPm5NC3szs20HFIrfrLTJ8eZk+4pjHq+nXQ8twoJ96J1B9hdsDskPPv70y+ocUkRVcgxSo3tzRlvJJFxIp+9AI2juFRQGoa5v40lzgexrSUiSIlBziqrqV1qNrdD/CmSDPLA9qVoNlwtbhZwSCB8VDqN3BbwEyyhfikk004tluIEyD3FM9Llt7iIC5iUFh6jIrkjmeaXcw3qkROuR81NdwtGORwfWvJ9Hihb8RZrsP/j/pRFqz3qtFPwy4596awAYHFeYqe7he2fzDKk8EVD39aIpzKDSiLmZpkxu+mh7jSwj5C5H2q0oue/J968aBWGCM1yC+CmS24jH01BYLuvNo96tN/pymM4WtOn+mpZp/HmHhRg5GRyanNSehk0MNJidNoRSc1ZrWCYD95+lE2NlDAgCKAPc0VNMkKYRQxqK6WDdyG8jqkK70GJCxUVSNd1+WJykbjj2qza21xcBgGKj2FUDV7RlZi3OfWtKSiqQm3yKrzVLic+aQ8/NQWNtd6peJbWkbTSsew9Pk0XpWh3esXotrVPXzORwg9zXRYo9H6I0p2jxJMRhpTjdI3t9qny9jtpLg10vTdM6H0trzUJVe6ZfM5HJP8qiud9UdUXnUFy28mO1U/u4QfT3ND9Ra3ea7em4umO0E+HHu4UUsVM1OUr0PGKu2RH+9bKx+a9dCPSvY1z25oUxrN42YdmP60ZDcTow2ysD96igt3kbbGjOfZRmnun9N6lckFLSQL7kYoOXbti8HllrV/bkEMW/OrXpPWEoKJOCfTmtNO6FldN13OIv/ABUZNWjSemdNscOIhI6cmSTnFBZ2gSURhp2pxXMakgqW9cUyNqJBkAOD71WNQvxdXng2wAjQYBXtTLS9QnjIRwzCj0/VwzpuPp0LPG47GMdqigwsuM+npQv4YRSFU4+KcxTxTDBA3etQ3lseGXnFaUxKBYbmS3O1xlP+9qIlj3f4i0Ybu4x2NQEBxz+lRwSPZy5BLQn6l9vmuZwXZ30GoB7eQYmX6kP9xQdxpsySkReZPQ1vqlkr7b2zbbIPNuT1rINfgWMLd745hwwUZB+aATn34lh9JzRVq7Ngsc5oKKEj1H5UfbRiM734UUyOYfGkbElyAF75qK81uOH91F6cEe9ItY1bYGWEhf8AWkkM7O/iOeM+9OTOjabfmdRubapptvhRAXYciqt09ayC2F5cfxf5Sntj3p7Ehlbk8mlYUZdTWjjBYj5K1W72ytJ5MSTHb7KvJqwajaGKJnXuBxxVQQTxy77mco2c5JABBPHB9Kz5s6xuqs04cHkTldDaK4ttOsmFvEIYVGTjux+TVB1y8udUumlmyEHCIfQU41jXDNfm0WKHw9m5BE2cN7N6en9anhs7aZY9oLyyIGCcYXPocetI+oxtWxFB91Ioz27Z7VMbOSMAleCMirDe6UsV0niSjL//ABqOB9jTyPTbN7VN0T5HlDMw4qXnTfBp7Iq1ZRILJpriKILkuwUVZtS6KuIo1ltEBOOU96Ku7Brd7Wa3SJgZAgZD6n1/KrNE+qJOluzhhtyrkdz6ipzzU7QXCoA37PdFNnbzyXcAWdm24YcgVanUZ4XAHekeqarc6KRdCDxYMYdV+rPxSqT9qWkIuTbTqxHZlpJ5Iy4exFil6RdYkypLEBQO5pJruqquLS0J3PwWH8X2rfprqSz6itSVKrIeyFqLvrdWXDIPL247VDLB5cdQfHv/AHo5VCXyQi03bbMPFQ7m557frTtLzEf7sKppXLCY3IGMH+lewyu527ORjHHeo4Lwrxx0NOp8hsl3LBcxTKx2yeUj5qw6fqcc42uQD81ROtdUXSLGyO4K73MYA+55/pmnExMQEsZwe/HrXt4naMsuC03ECk7kIwaAnUqMMMH0+aH0rVhOBG5HyKMuLpYcCdcxN6jnb9/irJitAq3T2TpuBMLHBH8pomXT4LhhIMcj0oa8tmKBoHDx9xg0Ot40S7AxXHoaYUqad+Aa01W6/DwbAfMRRULIvBxVb6hn/wAQ/P0ijALQnvLgzzbSeBU9ghuby2tgf82RU/U0sVssT61NpV6ttr1hM7YSO4QsfbmmYDr9yBDCixjaiDaB7AcUNBdOJMg8UbdRNJFhOcjIPpQscXhQ7nUb8dh70jfsAk6q6nkglWztd63UJDMWXy7T3596i6c1J7+Ga5uljLRHbuCjO3HrVc6rutSeRReQxoC3DKRtI/uKVx6hNolr+InEkfiYKAL5n+ftisE5OTbRrwyVUyzXmi2yyyy2E6qHP73AzuJPGPavNL0BbO6M8008pQbhg8fr3OKRaRq1/cqb6YzxxMwZo1bJYA8H7fFWTSOoXl1gLdTGK0xiNdgG72ZsnI7+1ZZQa2aXKGkuTXqOZmNrLDBJJCxyZYySp+/fH/FTahpM8ljFc6XcDB5aKVN28eoHse9P729ttLspb+2sjIZR5kiTiTP82Ky11e0j0v8AELuti+7asykYb4Ap1CPozzdN2KNKt717EPd2scYhwwQk54/KiX1bwtSgmlt7gWXhB1kKfSx9h3zUpv8AVJ7R2E1i48MsBG7BwPUYIzn8qKtr4w2MAaYrcyEBY28pYH4+aVpqQykpRpMC6mvCXh8J0e1n8zH6se9cr1WImeaOaJFcE8JkjvXbZ7Szl00nWLaEmTKMYxjPtjFIYOkNKgdtSH4m8tAOYnwRtx3wBk/am8fNoHfNfwcw6YbVre4WfSoJ5gpORGhNdg0XqCe8gWLVdOu4pBgB2iP9aN0qOZ9QDWyRppfg4VNm1g3BGCP4cU3lWN08NuM+zYxTLA2+5On/AGGWZSVNCu5gtbsFUnixjBUnBoG5vtG0G0D3NzFGsY8uXyftWnUOjPPA0cLl4pQRhWw6n3BrivU+lXenXBjuVc55BdsnAroJKXKpneO1cWFdYdUN1Nr8LQBktIWCxKe55712RmP4SPJ52D+1fP8Aods0+pQKFxlx/eu7vcAwqPYVuxLhkMlWgN7h7S4EqEgZwRVotLsXNurFskD9apmqSjwSD3Iorpi+MlvgnkeWmjsR6LnDviG+H6TyY/T8qkiayul8XcqHOCrcEGo7Vswqc/FDSfu5HGB3yM1QSznMeon8TGCT9QzS/qbKvM3PbP8AWtVRtxYjtzReqx/jLATAZLJhvvQTHaKvC2aBuz52BzzRETFWIPccGtb2Ekbx2osFFt6V/aS2nW6WesQvcQoNqTJy4Hsc96f3X7SumWhO38W7D+EQEflmuPSAj0rUWzOQcHOOwqUpNINIs/WHXllq0BtbPTGUA8SzMAQffil1xos0VpAZ2LCSJZPqztz6fFLrPT5DLlV3O2V2kZH511C/0t1uN0+UAt48LgY7Ecf0rJkn7RpwRTbsrGgahHHaeHk5fhkx6VZrYBoiIfBgdwE3cZHpnmqJf28iTzS26MTE3Zfqz9hU9tqds4jW9WVHPDp6N27UHyOqOmWN5Lp4jguFe5xGGZ4nG8gH07VpqFxYys9y+oyLI+MkgKIlHLbQed2APX0NIYJ7NraNPE8Mp9J7c+mfkelSpqiSxm3k5jjHnURhi57DnPf1pRXFaZabzSrDUrCN7G8ELRYYTIVDO3fzE5796rfU8FzDcx3XmuZ1ZdmwMVU89lHfKgE4wBz+TBr+O5eKwvUEG5f3QU48YfOOMD29aPsSoPg2s7TzLIT5ecdyR7HuB29K6TT4ZNQd/E0TVoFSC2viZDMi5Tjk++TwPj70TpOp3V7C13BHJEU8hSQABz6kcnIxikmtaFdaldTLIVaFAF8ds+YZzggYB9cUdp850W1S3mkVli4jHiblbPt/tjigoKK2V8j00NLW7/8AUTLCZXhMAAkhiYqysT8fpQWsWGv3DLbRXC24jIdpgp2yewJBz279v61qtvHe6w8k9xNDPtRyIjhcgk45HPH6U6hs0/EXEltvaS4kWST1AIAGefiq4l3K2Tmu2VFeNw2hFRcXjySDAfdg/wD56/pS/q7TTq+jyT2sH4hzGXTa2Cvz/erHrOjS3SGOO6jYN/mo8WQ55AYfPPzSxtLitZLazW7YICVO4DnI/wB/9alKHbLuZbHJyXakc76J00SX0lzIpCQnAHz/ANFXlrn93g8EDtU1zZx2EgXwo04DFl7E9jSi6bwyQOAK9CNdvBie+SLUrr93lj8Vt0nKx3j0MoApLqdwSMZqw9LW/hW6SSAj+P8A2poq2dJ8HRbJh+GTnmtpk3tnGeKR2uoMhCseBTaO6DKCGFUomcuCEnByAPWioZolHhMfK3cn3oG5dk+k0uuLl+e5FRumWqzTXNPa1uPHRT4bnnHoajtgsq7G7GmNhqkd2ps78cHhXI4oe50+Sxl3xnfCex9qomIDy6I8rjwlBGcjPemdp05ImHeaMNkfSuT+tTafcqBG+Wyh7KMk05m6ghinjgWzRpG7q2ck/PYVk6jIouikYt8i5GEF9HbPuOZFZXEfC845Pb0qxXN5Z3RjZgs67Gjn25bsfj1zQet6tAmmSmaJYjs2+HA+T7/kc/ftS3Q9WhtYJLeZVy67iyKBnd3x7H5rJalwmXgmnyieWCzcTfh7SWWQcEHhm44x3wOKoslp+NuWt1t3lYt9eGPh/Bx+nPNdZi1C1l04SW6kSqBGnnxge+fjvVd168g6csoDGQomY7QDtB247nuTzXU4aGioydXRUrHSeqI0KQ2Uxjj7Fo8kn+9BXCaro9w013FLGZckrMMK3virDpfWqWt411DuuGfvEuSFB9eBk0t6/wCr26ggS1jslDbjiQ8Og44x35PvVYXLaOyfHTtCtepY7q+E96VJWPYoYcD86tfTfUh0y3ie6vI7eGZmIYJkvzx2/SuYvYzRxhyjAHuSO1MenNJu9QuWSCJ5Ng7Y4GaeWOO0ycJXwdef9oumrH4XiqUJz5cc/pVavOsoC5fwmlYAqhC4APuexJoS36Qme4WDaofaW24yT+dSzdKtbOh/FO20nCIgGTjsCTyfis/EpUzQ2oRtEXTHUFwdWtlkuPCiVi7SSnLMMcj7V1vTtcsb6Ro4nYxxgHyD1PufU1yXTLaK3inupRAyKVR1kizzkcEEjA5Gf+atXTuqRyn8PpdvDD4hOQCXVCPX4z/xWmHHCRgeS3yXyVpJfCEIX3DA4NUOylfUeopo59+2BvIwfPJYk5HYY7Zq5QTy2sO/UWtYzgYk3bEB9Mk1z+1zb9U6xd2cisxSQool3oz8/SfXkHt70cuNSVs04MnamMtc1q2luFtBtZlyORyOPX+lJb2ZjbhpQqyEeYL2FIrcP4zXlyxM0xyAfQepp0sE+puscQOCfM3oBV4wcUkQk03YDptm+o3qrgmMHJP+lXQbYQIkx5e59zQixRaTbeDbDdIfqavI5ST5j5jWiKohJ2Fs3B5qaC8dYwOP1oNXoWWNmclbqeMfypjFMxRLdEnkUslBPLN+lM5DvXB+ml8oC54rKaAN8du4o2y1aW2Xw5Bvi9moGTvUTNxXXQaLXp9xZv5oNpBYMY+xzRNyLW7nH7uC3dmAG9jv/JqoRaRH3I5DemKMh6gmtwFu0Eqg8FhUMnTxyu/ZSOVwVei+HQGaEl9TQjk7Svf5zVe1fRrwXDPbTMyoMhzE+z8yAQKI0nqa08VWkycDhZORTx+op7mdWhKCPaU8PdlT8mu/HjFaFeaRSk1q50hHS7iYKw3KQdwI9wRUTC765ntIVwsMJIY5GQT3OPtirfqcFhexSG8tzLHjO6NcHuOMd+1C3TabYW0c2ilbfYD5QMAZ7n5P3qU32/VFIVLhjvTOkLHQdPm/BbWukiJ8RwAScd80r1HSIraze5ndRPINvnAO5244JBIFQ6Hrkk9w1vqN5+7cEFSB2+9MBdLq2riTw3Gn6aCyhQCZGHqB8e1SxxcpXQ+T48NiSbpHUXhjutUMfgRI8txDE26TBB5JA5NNek9L0/T9D3pJIJZG3SzKTlcEHHt24o3WtQs7jSI7K1WWSWVwrPKMkBjzz/SoLRZ7W2FtC1uyQHfKC21VXP8A9j/vVckl3UiWKDaNY9Rn1a6lOnzKr7vDUJEXCZ9c/aoNP6V1Gw11Lye9YwpLnxWQkv8AOCeKb61rlhoPgx21hGVYbnZFA2n5pDd9Vy+HJ4bPI8uWUc+UH0A/1pEoRC4yyyp8Fw1vTOntjXd9FAHB85B5b4IHekOidQW5jZdO0y3t+POQm3HzSC0s572b/wBxuZEP17CSXJ9KYC3uDcK0jJHD9LRcecfNO5zn9UUjixw5Y4i1iS6sZU1VI5LZsq6uMbhVJjePUNVM2jwGxton3GGFcAsDwBjvx/eml69jBAsd9cmRs5CocflgVJpd6yNEtnYiG23DcWGCarjw5K+TFyZoL6kmm9Ps+J75hGp58MDkfHeml7d29okdtproWP17ecD71WOquobiG4EFtBIsbn6qksnxbRbwQWPGRz+dbY7Mcrqxxv3JuPOe+f8Av2rVZAMMewGDUEbkqN3Ax2/7969Q4LKe2f6VQmHiTk/rWrsN3cfrQytsK+xBGK2Y5Pp+VE4Vn/LoC4rKyshoQBLULVlZXBIX+k0svjXlZTRAyJGIi4JFNNLlkBGHb9aysp47AW6wlk8Iedv1rfUEQs2VX09KysqUxoiMqovFIABz6D7VYo5pYtFg8KR0ygztYjPNZWUkTsuhNp0sj63bB3ZgG4yc45re9lk/EXPnbhjjntWVlZ5bNXS6H08Ub2VsrorADsRn0rWzjQXz4RRhBjjtXtZT4iOX9QkuSfGJzzjvSPVpZAhxI45/mNe1la4aM09lVuGZrqLJJ8w7n5rp2lqrWUG4A8DuKyspofYeX1G95bW76erPBExHYlAcVUJ+JBj3rKynJvRLF9A+5/tWHsK8rKIhP/J8itzWVlMjj//Z"
                                     alt="Chicken Escalopes"
                                     className="img-thumbnail"
                                     height={150} width={200}/>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Row className={'justify-content-center my-4'}>
                    <Col xs={2}>
                        <Button size="lg" onClick={ () => Next() }>Next</Button>
                    </Col>
                </Row>
            </Container>
            <NavbarBottom/>
        </>
    );
}

export default OrderFirstPhase;