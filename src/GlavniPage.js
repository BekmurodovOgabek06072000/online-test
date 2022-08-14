import React, { useState } from 'react'
import axios from 'axios'
import './App.css'
import { Link } from 'react-router-dom'
export const GlavniPage = ({ setTest, setPage, setTime }) => {
    const [Loading, setLoading] = useState(true)
    const [Kategori, setKategori] = useState(19)
    const [NumbetTest, setNuberTest] = useState(10)
    const SortTest = []
    //https://opentdb.com/api.php?amount=2&category=19 matematika
    //https://opentdb.com/api.php?amount=10&category=21 sport
    //https://opentdb.com/api.php?amount=10&category=22 geografiya
    //https://opentdb.com/api.php?amount=10&category=23 tarix

    function GetTest(params) {

        setLoading(false)
        axios.get(`https://opentdb.com/api.php?amount=${NumbetTest}&category=${Kategori}`)
            .then(respp => {


                function getRandomInt(max) {
                    return Math.floor(Math.random() * max);
                }
                for (let index = 0; index < respp.data.results.length; index++) {
                    let sss = []
                    sss = respp.data.results[index].incorrect_answers
                    sss.splice(getRandomInt(5), 0, respp.data.results[index].correct_answer,)

                    const vari = []
                    for (let i = 0; i < respp.data.results[index].incorrect_answers.length; i++) {
                        vari.push({
                            variant: respp.data.results[index].incorrect_answers[i],
                            color: 'transparent'
                        })

                    }

                    SortTest.push(
                        {
                            number: index + 1,
                            savol: respp.data.results[index].question,
                            togrijavob: respp.data.results[index].correct_answer,
                            variantlar: vari,
                            color: 'transparent',
                            javob: '',
                            check: false,
                            belgilash:false
                        }
                    )

                }

                console.log(respp.data.results);
                setTest(SortTest)
                setPage(true)
                setLoading(true)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const buttons = document.querySelectorAll('.ripple')

    buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            let x = e.clientX - e.target.offsetLeft
            let y = e.clientY - e.target.offsetTop

            let ripples = document.createElement('span')
            ripples.style.left = x + 'px'
            ripples.style.top = y + 'px'
            this.appendChild(ripples)

            window.setTimeout(() => {
                ripples.remove()
            }, 500)
        })
    })

    return (
        <div>
            <div className='Navbar'>
                <ul>
                    <li><h4>FinalExam</h4></li>
                    <li></li>
                    <li></li>

                </ul>

            </div>
            <div className='CheckTestNumber'>

                <div className='CheckTestNumberDiv'>
                    <div className='TestCheck'>
                        <p>Number Of Questions</p>
                        <select onChange={(e) => { setNuberTest(e.target.value) }}>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="30">30</option>

                        </select>
                    </div>
                    <div className='TestCheck'>
                        <p>Select Category:</p>
                        <select onChange={(e) => { setKategori(e.target.value) }}>
                            <option value="19">Mathematics</option>
                            <option value="21">Sports</option>
                            <option value="22">Geographi</option>
                            <option value="23">History</option>


                        </select>
                    </div>
                </div>

            </div>

            <div className="App">
                <div style={{ width: '80%', padding: '10px' }}>


                    <Link to={'/quiz'}>
                        <button style={{ backgroundColor: 'rgb(0, 145, 7)' }} onClick={() => { GetTest() }} type="button" class=" Start ripple">{Loading ? 'START' : 'Loading...'}  </button>

                    </Link>
                    <button style={{ backgroundColor: 'rgb(5, 135, 175)' }} type="button" class="Start ripple">TESTS</button>
                </div>



            </div>

        </div>
    )
}
