import React, { useState } from 'react'
import './App.css'
export const WorkPage = ({ Test, Page, setTest, Time ,setTime}) => {
    const [time,settime]=useState(Time)
    const [TestNumber, setTestnumber] = useState(1)
    const [natija, setnatija] = useState(0)
    const [Hour, setHour] = useState()
    const [Min, setMin] = useState()
    const [Second, setSecond] = useState()

    let tests

    console.log(Test);


    tests = Test.filter(ss => ss.number == TestNumber)
    console.log(tests);

   
    function SortNumberTest(id) {
        setTestnumber(id)
    }

    function JavobBelgilash(num, jav) {
        const newTest = []
        for (let index = 0; index < Test.length; index++) {
            if (index == num - 1) {
                const newVariant = []
                for (let i = 0; i < Test[index].variantlar.length; i++) {
                    if (Test[index].variantlar[i].variant == jav) {
                        newVariant.push({ variant: jav, color: 'rgb(155, 155, 155)' })
                    }
                    else {

                        newVariant.push({ variant: Test[index].variantlar[i].variant, color: 'transparent' })
                    }

                }
                const wq = {
                    check: Test[index].check,
                    color: "rgb(155, 155, 155)",
                    javob: jav,
                    number: Test[index].number,
                    savol: Test[index].savol,
                    togrijavob: Test[index].togrijavob,
                    variantlar: newVariant,
                    belgilash:true
                }
                newTest.push(wq)

            }
            else {
                newTest.push(Test[index])
            }


        }
        setTest(newTest)
    }
    function OneCheck(num) {
        const NewTest = []
        for (let index = 0; index < Test.length; index++) {
            if (index == num - 1) {
                if (Test[index].javob == Test[index].togrijavob) {
                    const newVariant = []
                    for (let i = 0; i < Test[index].variantlar.length; i++) {
                        if (Test[index].variantlar[i].variant == Test[index].togrijavob) {
                            newVariant.push({ variant: Test[index].variantlar[i].variant, color: 'rgb(30, 255, 0)' })
                        }
                        else {
                            newVariant.push({ variant: Test[index].variantlar[i].variant, color: 'transparent' })
                        }

                    }

                    NewTest.push({
                        check: true,
                        color: "rgb(30, 255, 0)",
                        javob: Test[index].javob,
                        number: Test[index].number,
                        savol: Test[index].savol,
                        togrijavob: Test[index].togrijavob,
                        variantlar: newVariant,
                        belgilash:false
                    })
                }
                else {
                    const newVariant = []
                    let colo
                    for (let i = 0; i < Test[index].variantlar.length; i++) {
                        if (Test[index].variantlar[i].variant == Test[index].togrijavob) {
                            newVariant.push({ variant: Test[index].variantlar[i].variant, color: 'blue' })

                        }

                        else {
                            if (Test[index].variantlar[i].variant == Test[index].javob) {
                                newVariant.push({ variant: Test[index].variantlar[i].variant, color: 'rgb(247, 112, 58)' })

                            }
                            else {
                                newVariant.push({ variant: Test[index].variantlar[i].variant, color: 'transparent' })

                            }
                        }

                    }

                    NewTest.push({
                        check: true,
                        color: 'rgb(247, 112, 58)',
                        javob: Test[index].javob,
                        number: Test[index].number,
                        savol: Test[index].savol,
                        togrijavob: Test[index].togrijavob,
                        variantlar: newVariant,
                        belgilash:false
                    })
                }
            }
            else {
                NewTest.push(Test[index])
            }

        }
        console.log(NewTest);
        setTest(NewTest)
    }
    function OpshiNatija() {
        const NewTest = []
        for (let index = 0; index < Test.length; index++) {
            if (Test[index].check) {
                NewTest.push(Test[index])
            }
            else {
                if (Test[index].javob == Test[index].togrijavob) {
                    const newVariant = []
                    for (let i = 0; i < Test[index].variantlar.length; i++) {
                        if (Test[index].variantlar[i].variant == Test[index].togrijavob) {
                            newVariant.push({ variant: Test[index].variantlar[i].variant, color: 'rgb(30, 255, 0)' })
                        }
                        else {
                            newVariant.push({ variant: Test[index].variantlar[i].variant, color: 'transparent' })
                        }

                    }

                    NewTest.push({
                        check: true,
                        color: "rgb(30, 255, 0)",
                        javob: Test[index].javob,
                        number: Test[index].number,
                        savol: Test[index].savol,
                        togrijavob: Test[index].togrijavob,
                        variantlar: newVariant,
                        belgilash:false
                    })
                }
                else {
                    const newVariant = []
                    let colo
                    for (let i = 0; i < Test[index].variantlar.length; i++) {
                        if (Test[index].variantlar[i].variant == Test[index].togrijavob) {
                            newVariant.push({ variant: Test[index].variantlar[i].variant, color: 'blue' })

                        }

                        else {
                            if (Test[index].variantlar[i].variant == Test[index].javob) {
                                newVariant.push({ variant: Test[index].variantlar[i].variant, color: 'rgb(247, 112, 58)' })

                            }
                            else {
                                newVariant.push({ variant: Test[index].variantlar[i].variant, color: 'transparent' })

                            }
                        }

                    }

                    NewTest.push({
                        check: true,
                        color: 'rgb(247, 112, 58)',
                        javob: Test[index].javob,
                        number: Test[index].number,
                        savol: Test[index].savol,
                        togrijavob: Test[index].togrijavob,
                        variantlar: newVariant,
                        belgilash:false
                    })
                }
            }

        }
        let de = 0
        for (let index = 0; index < NewTest.length; index++) {
            if (NewTest[index].javob == NewTest[index].togrijavob) {
                de++

            }

        }
        setnatija(de)
        setTest(NewTest)
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
        <>
            {Page ? <div>
                < div className='Navbar' >
                    <ul>
                        <li><h4>FinalExam</h4></li>
                        <li><h4>{TestNumber}/{Test.length}</h4></li>
                        <li><button onClick={() => { OpshiNatija() }} type="button" class="btn btn-danger ripple" data-bs-toggle="modal" data-bs-target="#staticBackdrop">FINISH</button> </li>

                    </ul>

                </div >
                <div className='ButtonGroup'>
                    <div className='ContainerButton'>
                        {
                            Test.map(ss => {
                                return (
                                    <button className='ripple' style={TestNumber == ss.number ? { backgroundColor: 'blue' } : { backgroundColor: ss.color }} onClick={() => { SortNumberTest(ss.number) }}>{ss.number}</button>
                                )
                            })
                        }




                    </div>

                </div>
                <div className='ButtonGroup'>
                    {
                        tests.map(eee => {
                            return (
                                <div className='ContaineRequest'>

                                    <div className='Request'>
                                        {eee.savol}
                                    </div>
                                    <div className='VariantDiv'>
                                        {
                                            eee.variantlar.map(ww => {
                                                return (
                                                    <button disabled={eee.check ? true : false} style={{ backgroundColor: ww.color }} onClick={() => { JavobBelgilash(eee.number, ww.variant) }} className='Variantlar ripple'>
                                                        {ww.variant}
                                                    </button>
                                                )
                                            })
                                        }



                                    </div>

                                    <div className='Navbar  checktest' style={{ borderTop: '1px solid  rgb(202, 202, 201)' }}>
                                        <ul>
                                            <li><button onClick={() => { setTestnumber(TestNumber - 1) }} disabled={TestNumber == 1 ? true : false} type="button" class="btn btn-primary ripple">PREVIOUS</button></li>
                                            <li><button onClick={() => { OneCheck(eee.number) }} disabled={eee.belgilash ? false : true} type="button" class="btn btn-secondary ripple">SUBMIT</button></li>
                                            <li><button onClick={() => { setTestnumber(TestNumber + 1) }} disabled={TestNumber == Test.length ? true : false} type="button" class="btn btn-primary ripple">NEXT</button></li>

                                        </ul>
                                    </div>

                                </div>

                            )
                        })
                    }

                </div>

            </div > : <div style={{ width: '100%', height: '300px', textAlign: 'center' }}>  <h4 style={{ marginTop: '30px' }}>Loading...</h4></div>
            }





            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Your results</h5>
                        </div>
                        <div style={{ textAlign: "center" }} class="modal-body ">
                            {natija}/{Test.length}
                            or {(natija / Test.length) * 100}%
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
