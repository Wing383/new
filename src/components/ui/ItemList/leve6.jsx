import './leve6.css'
function leve6() {
  return (
    <div>
      <Header level={5} />
      <div className='top-button'>
        <button onClick={() => navigate('/Level4')}>
          level4
        </button>
      </div>
      <div className="button-wrapper">
        <div className='vertical-buttons'>
          {labels1.map((label, index) => (
            <button key={index}>{label}</button>
          ))}
        </div>
        <div className='vertical-buttons'>
          {labels2.map((label, index) => (
          <button key={index}>{label}</button>
          ))}
        </div>
      </div>
      <div className='bottom-button'>
        <button onClick={() => navigate('/Level6')}>
          level6
        </button>
      </div>
      <Footer level={5} />
    </div>
      
    
  )
}

export default 6