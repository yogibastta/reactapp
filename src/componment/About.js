import React, {useState} from 'react'

export const About = (props) => {

    const [mystyle, setmyStyle] = useState({
        color : '#000',
        backgroundColor: '#fff'
    });

    const [btnText, setbtnText]= useState('Enable Dark Mode')

   const togglestyle = ()=>{
        if(mystyle.color == '#000'){
           setmyStyle({
            color : '#fff',
            backgroundColor: '#000'
           })

           setbtnText('Enable Light Mode')
        }
        else{
            setmyStyle({
                color : '#000',
                backgroundColor: '#fff'
                })

                setbtnText('Enable Dark Mode');

        }

    }
    

   

    return (
        <div className='container accordion_wrapper' style={{backgroundColor: props.mode==='dark'? '#032744' : '#fff', color: props.mode==='dark'? '#fff' : '#000'}}>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={{backgroundColor: props.mode==='dark'? '#032744' : '#fff', color: props.mode==='dark'? '#fff' : '#000'}}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor: props.mode==='dark'? '#032744' : '#fff', color: props.mode==='dark'? '#fff' : '#000'}}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor: props.mode==='dark'? '#032744' : '#fff', color: props.mode==='dark'? '#fff' : '#000'}}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>



            <button onClick={togglestyle} className="btn btn-primary btn_margin mx-2">{btnText}</button>

        </div>
    )
}
