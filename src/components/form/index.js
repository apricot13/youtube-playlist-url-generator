import {useState, useEffect} from 'react';

function Form() {
  const [actioned, setActioned] = useState(false);
  const [links, setLinks] = useState([]);
  const [playlistUrl, setPlaylistUrl] = useState('');
  const [duplicateLinks, setDuplicateLinks] = useState([]);
  const [newPlaylistListLink, setNewPlaylistListLink] = useState('');
  const maxVideoNumber = 50;

  useEffect(() => {
    setPlaylistUrl(formatPlaylistUrl(links))
}, [links]);

  const handleClick = (e) => {
    e.preventDefault();

    const linksList = document.getElementById('links').value.trim();
    if (linksList.length > 0) { 
      setLinks(manageLinks(linksList)); 
      setActioned(true) 
      setPlaylistUrl(formatPlaylistUrl(links))
    } else {
      setLinks([])
      setActioned(false)
      setPlaylistUrl('')
    }
  }

  const checkIsUrl = (link) => {
    try {
      const url = new URL(link);
      return url
    } catch (_) {
      return false;  
    }
  }

  const manageLinks = (linksList) => {

    const linksArray = linksList.split(/[\s,;]/).filter(i=>i.length > 0).map(i=>i.trim())
    const idArray = linksArray.map(link => {
      let videoId;
      const isUrl = checkIsUrl(link);

      if(isUrl) {
        const urlParams = new URLSearchParams(isUrl.search)
        videoId = urlParams.get("v")
      }
      else {
        videoId = link
      }
      
      return videoId
    })


    const uniqueIdArray = idArray.filter((v, i, a) => a.indexOf(v) === i);

    setDuplicateLinks(idArray.filter((v, i, a) => a.indexOf(v) !== i))

    return uniqueIdArray;
  }

  const formatPlaylistUrl = (links) => {
    return `http://www.youtube.com/watch_videos?video_ids=${links.slice(0,maxVideoNumber).join(',')}`;

  }

  const copyPlaylistUrlToClipboard = (e) => {
    e.preventDefault();

    navigator.clipboard
      .writeText(playlistUrl)
      .then(() => {
        console.log("Copied to clipboard");
      })
      .catch(() => {
        console.log("Failed to copy to clipboard");
      });
  }


  const handlePlaylistLink = (e) => {
    e.preventDefault();

    const playlistLink = document.getElementById('createdPlaylistLink').value.trim();
    const isUrl = checkIsUrl(playlistLink);

    if(isUrl) {
      const urlParams = new URLSearchParams(isUrl.search)
      const listId = urlParams.get("list")
      setNewPlaylistListLink(`https://www.youtube.com/playlist?list=${listId}`);
    }
    else {
      setNewPlaylistListLink('')
    }

  }

  const copyNewPlaylistLinkToClipboard = (e) => {
    e.preventDefault();

    navigator.clipboard
      .writeText(newPlaylistListLink)
      .then(() => {
        console.log("Copied to clipboard");
      })
      .catch(() => {
        console.log("Failed to copy to clipboard");
      });
  }

  return (
      <section className="bg-white py-14" id="playlist">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Create your playlist here
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>



        <div className="w-full px-4 md:w-1/3 my-16 mx-auto">
          <div className="form-control">
            <textarea className="textarea textarea-primary textarea-bordered h-48" placeholder="Paste links and videoIDs here" id="links" onChange={handleClick}></textarea>
            <label className="label">
              <span className="label-text-alt">Copy a list of <strong>links</strong> or <strong>videoID's</strong> here. Separated by <strong>commas</strong>, <strong>semi colons</strong> or on <strong>new lines</strong>.</span>
            </label> 
          </div>
          {/* <button className="btn btn-primary btn-lg w-full my-4" onClick={handleClick}>Create</button> */}
        </div>

        {actioned && (
        <>
                <div className="w-full px-4 md:w-1/4 my-16 mx-auto">
                  <div className="divider"></div>
                </div>

                <div className="w-full px-4 md:w-1/3 my-16 mx-auto text-center">
                  <a href={playlistUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">Open playlist in new window</a>
                  <br />
                  <br />
                
                  <div className="form-control">
                    <textarea className="textarea textarea-secondary textarea-bordered h-48" id="playlistLink" placeholder="Copy playlist link from here" value={playlistUrl} readOnly></textarea>
                  </div>
                  <button className="btn btn-sm btn-outline my-2" onClick={copyPlaylistUrlToClipboard}>Copy to clipboard</button>


                  <br />
                  <div className="stats shadow my-6 clearfix">
  
                  <div className="stat">
                    <div className="stat-title">Videos included</div>
                    <div className="stat-value">{links.length}</div>
                  </div>
                  
                  {links.length > maxVideoNumber &&
                  <div className="stat">
                    <div className="stat-title">Videos excluded</div>
                    <div className="stat-value">{links.length - maxVideoNumber}</div>
                  </div>
                  }

                  {duplicateLinks.length > 0 &&
                  <div className="stat">
                    <div className="stat-title">Videos duplicated</div>
                    <div className="stat-value">{duplicateLinks.length}</div>
                    <div className="stat-desc">We've removed these for you!</div>
                  </div>
                  }
                  
                </div>

                <div className='card bg-accent text-accent-content'>
                <div className="card-body">
                <p className="text-sm py-4">Once you have your playlist you can optionally copy the list value youtube generates and copy it into this url format, this will allow you to name your playlist or share it more easily.</p>
                
                <div className="form-control">
                    <input type="text" className="input input-sm input-secondary input-bordered" id="createdPlaylistLink" onChange={handlePlaylistLink} placeholder="Copy playlist link from here" />
                  </div>


                  <div className="w-1/4 my-2 mx-auto">
                  <div className="divider"></div>
                </div>

                  <div className="form-control">
                    <input type="text" className="input input-sm input-accent input-bordered" id="newPlaylistListLink" onChange={handlePlaylistLink} value={newPlaylistListLink} readOnly placeholder="Copy playlist link from here" />
                  </div>
                  <div className='card-actions justify-center'>
                  <button className="btn btn-sm btn-outline my-2 btn-inline" onClick={copyNewPlaylistLinkToClipboard}>Copy to clipboard</button>
                  </div>
                  </div>
                  </div>

                </div>
            </>
        )
        }

       
       
              
       

    </section>
  );
}

export default Form;
