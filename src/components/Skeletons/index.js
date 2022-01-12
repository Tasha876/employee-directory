import React from 'react'
import SkeletonElement from './SkeletonElement/index'

const Skeleton = () => {
    return (

        <div className="card">
        <SkeletonElement type={'image'}/>
        <div className="content">
          <ul>
            <li>
                <SkeletonElement type={'text'}/>
            </li>
            <li>
                <SkeletonElement type={'text'}/>
            </li>
            <li>
              <SkeletonElement type={'text'}/>
            </li>
            <li>
              <SkeletonElement type={'text'}/>
            </li>
          </ul>
        </div>
        <span className="remove">&#x21bb;</span>
      </div>
        // <div className='card'>
        //     <SkeletonElement type={'image'}/>
        //     <SkeletonElement type={'text'}/>
        //     <SkeletonElement type={'text'}/>
        //     <SkeletonElement type={'text'}/>
        //     <SkeletonElement type={'text'}/>
        // </div>
    )
}

export default Skeleton
