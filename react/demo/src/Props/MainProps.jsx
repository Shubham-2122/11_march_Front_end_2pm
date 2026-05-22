import React from 'react'
import ClassProps from './ClassProps'
import FuncProps from './FuncProps'

function MainProps() {
  return (
    <div>
        <h1 className=''>This is props Data</h1>

        <div className="container">
            <h1>This is Class</h1>
            <div className="row">
                <ClassProps title="car 1" desc="car 1 sdfnjkasdhasi dh" img="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png"  />
                <ClassProps title="car 2" desc="car 1 sdfnjkasdhasi dh" img="https://cdn.pixabay.com/photo/2017/03/10/10/13/vehicle-2132360_1280.jpg"  />
                <ClassProps title="car 1" desc="car 1 sdfnjkasdhasi dh" img="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png"  />
                <ClassProps title="car 2" desc="car 1 sdfnjkasdhasi dh" img="https://cdn.pixabay.com/photo/2017/03/10/10/13/vehicle-2132360_1280.jpg"  />
                <ClassProps title="car 1" desc="car 1 sdfnjkasdhasi dh" img="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png"  />
                <ClassProps title="car 2" desc="car 1 sdfnjkasdhasi dh" img="https://cdn.pixabay.com/photo/2017/03/10/10/13/vehicle-2132360_1280.jpg"  />

            </div>
        </div>

        <div className="container">
            <h1>This Function Props</h1>
            <div className="row">
                <FuncProps title="car 1" desc="asdkjasldijaslidjila" img="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg" />
                <FuncProps title="car 1" desc="asdkjasldijaslidjila" img="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg" />
                <FuncProps title="car 1" desc="asdkjasldijaslidjila" img="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg" />
                <FuncProps title="car 1" desc="asdkjasldijaslidjila" img="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg" />
                <FuncProps title="car 1" desc="asdkjasldijaslidjila" img="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg" />
            </div>
        </div>
    </div>
  )
}

export default MainProps