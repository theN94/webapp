import React from 'react'

function Home() {
  return (
    <>
      <Header />
        <div className="content-body">
          <div>
            {loading ? <LoadingSpinner /> : (
              <AppRoutes handleUpload={handleUpload} results={results} error={error} isImageGenerated={isImageGenerated} handleTextUpload = {handleTextUpload} handleImageUpload={handleImageUpload}/>
            )}
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Home
