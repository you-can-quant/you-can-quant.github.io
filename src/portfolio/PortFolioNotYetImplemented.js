import 'tw-elements';

function PortFolioNotYetImplemented(props) {
    return (
      <div className="grid grid-cols-1 bg-gray200 rounded-md border-2 border-gray-200 shadow-md p-2 md:p-4">
        <div className="grid grid-cols-2">
          <div>
            <div className='font-bold md:text-lg'>{props.title}</div>
          </div>
          <div className='text-right'>
            <div className='font-bold text-gray-600'>개발 중이에요!</div>          
          </div>
        </div>
      </div>
      );
}

export default PortFolioNotYetImplemented;