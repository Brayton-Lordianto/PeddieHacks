export default function Landing(props, ref) {
  // gets the youtube id from the url  
  function youtube_parser(url) {
    console.log('yt url in landing is ', url)
    console.log('timestamp in landing is ', props.timestamp)
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : false;
  }
  // const id = "cF2lQ_gZeA8"
  const id = youtube_parser(props.data)

  const timeInSeconds = () => {
    const x = Math.floor(props.timestamp/1000)
    console.log('in secs', x)
    return x
  }

  return (
    <>

      <div className="pl-50 bg-blue w-full p-8 flex justify-center">
        <center>
          <iframe className='rounded-md'
            title='Youtube player'
            width="1000" height="700"
            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
            src={`https://youtube.com/embed/${id}?start=${timeInSeconds()}&autoplay=1`}>
          </iframe>
        </center>
      </div>

      {/* <center className="text-2xl">&nbsp;&nbsp;&nbsp;Summary: react hooks are a new feature in react version 16.8 which allows you to use other
        react features without writing a class. hooks don't work inside classes they let
        you use react without writing a class. the first reason is more related to
        JavaScript than react itself.
      </center> */}
    </>
  )
}