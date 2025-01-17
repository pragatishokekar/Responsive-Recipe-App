export default function ImproveSkills(){
    const list=[
        "Learn new recepies",
        "Experiment with food",
        "Write your own recipe",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]
    return (
        <>
          <div className="section improve-skills">
          <div className="col img">
                <img src="/img/gallary/img_10.jpg" alt="" />
                </div>
                <div className="col typography">
                    <h1 className="title">Improve Your Culinary Skills</h1>
                    {
                        list.map((item,index) =>(
                            <p className="skills-item" key={index}>{item}</p>
                        ))
                    }
                    <button className="btn">Signup Now</button>
                </div>
               
            </div>
        </>
    )
}