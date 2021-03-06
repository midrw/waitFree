import React from 'react';
import './Welcome.css';
import { NavLink } from 'react-router-dom'
import { useReducer } from 'react';

const ReaderRow = () => {
  var data = [];
  const forceUpdate = useReducer((bool) => !bool)[1];

  const deleteData = (e) => {
    if (window.confirm('确定删除该顾客？')) {
      sessionStorage.removeItem(e.target.parentNode.childNodes[1].innerHTML);
      forceUpdate();
    } else {
      return;
    }
  }

  const dataInit = () => {
    for (var i = 0; i < sessionStorage.length; i++) {
      var key = sessionStorage.key(i);

      if (!isNaN(key)) {
        var value = sessionStorage.getItem(key);
        var jsonValue = JSON.parse(value);
        data.push({
          id: key,
          people: jsonValue.people
        })
      }
    }

    for (var i = 0; i < data.length - 1; i++) {
      for (var j = 0; j < data.length - 1 - i; j++) {
        if (data[j].id > data[j + 1].id) {
          var tem = data[j];
          data[j] = data[j + 1];
          data[j + 1] = tem;
        }
      }
    }
  }
  
  dataInit();

  return (
    data.map((item, i) => {
      return [
        <tr onClick={deleteData} key={item.id}>
          <td>{i + 1}</td>
          <td>{item.id}</td>
          <td>{item.people}</td>
        </tr>
      ]
    })
  )
}

class Welcome extends React.Component {
  logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REFDRjE3RTU2QUNCMTFFNzkwRjE4RDZCRDJCODUyOTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REFDRjE3RTY2QUNCMTFFNzkwRjE4RDZCRDJCODUyOTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQUNGMTdFMzZBQ0IxMUU3OTBGMThENkJEMkI4NTI5MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEQUNGMTdFNDZBQ0IxMUU3OTBGMThENkJEMkI4NTI5MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuWPdDQAAAGAUExURabq18TExBzImnnew9P06+v69iXKnpzn04fiyYu4rPr9/Vm3npW2reHc3TfZrTvSqaO7tFPVsj7QqTnVqy3NoVK9oLW9u2TZus3LzOX588Tx5TTesErCojXOpWnbvLDAvLXt3pu7s9rU1jjPpkXLpyLKnDnZrfX9+zjWrM3z6DPhstHMzivMoNn27mq1oXO1ozXcr0DRqkLFoj3Op0m8nb7CwRLGleXh4qK3sX2zpNbS08jGxmO1nyjLnzzPqKm6td7Y2lDBor7v4pPlz0vMqTrPp2C8ozDNojLNpPH8+Wm9pkHWrqi+uPz+/tzW2GS2oF3Yt1fXtP39/RjHmEbSrE/VsPn7+0zHpsjy5kfQq0LOqPD7+B/Jmz/RqePe3yrLoO7798fIyHDcvz3WrUTBn3m8qjzQqP///z3QqDzRqD3Qqf7+/v3//svHyDzQqdHOz9z37/7//z7RqeD48cXHxxfHmDzSqWDYuD3Uq0TUrEDJpD/Tq2+9qELUrPv+/f///wUKvAIAAACAdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AOAVLZwAABstJREFUeNqU2Gtb2kgUAOAACoIQlAQsjUEEU0KMELRcxA5qbYrWFmtta9cmWu1uuFRrobrdW/Wv72SSkIAB6XzwETK8z8yZyeScYLf27c37y6u5ee8f/714/vzFf394p+auyu/fDOiM2Xz35dZXzs9nNxdkFjdaZyGcnc+XffDiKMiX28TlVOaQpXCWJYJ6I1gWF4jDzMvFhA1zF0ks+sN/CThBBJuKUqkoiva3GSQIXPg37L9M3I+US+FHAgsB9HNrq0CIFT6HpxL3ILWrzC7FBu8KhgOZ3cxpbRiyUTqk8IGEzuDUYWljMFJe3aWIYYTGEMLuamIAUis/ofDmPQRimriQKSfskNraJMdWRjDUwbDUk9OEDXLxnCNGIhDDcnsP7iK1zC8YSMnU+pHAKpyLTedQEoBkyObCCkutBnqR4xKOr9h0lav8zA+StlVwvHRsRTbyzyi7ccgn/IdUKs6L6FMDNuuMqGd5K3K5xzXtDB6MndfrN/u80hC3gSRJTNWcW6XJ7QVM5Lgk2AVV5t1jdbXFQINnxJmtrS1XDrjFUDe4+oQQcrFJ2RtpZESTVUbBoqnxjx9T40+nmarcndDmhYEU/VRwiDG+z0iuT6/qWrvZwdykoQQpf1FHLmaFyhDj9bXTk6qb7VUaVDv6CmlDwVBEgkONA+ym3tOeSqK+TEGhpCGLk9ydgeRsjG+YB0v72vC/cxejB7fCTQYQkm+wd8fB6MaPwrVmvPK8JU942jWufvh0ktR7sisRhHgpG+ODblzrxs2EBLbp7RPnaxSeM7c+nyblV5HAJHVnLoYxc33g0Q1nVQ41WrlkYUuLitGZmjyGSH4Zv2M8RManmcKB55Vu0Dl0sUMmVTUKjPngyw6ITBHB/rlYDDQO39bBdk6/nOSj6jWa1j8TxDpEvNRXeyNmGHVXoQBAq2WLNCkvRLJcj0F2x2HEo97ecnk873i0qiE0nbY5HYXL3mLFnrh2aOmpuhPqH2NOxuPTN1d7PLUTnSbh9ZZSwL6ogXUqZmSLmOOxJa4NRfLoc3G6z3w92zQtiUqr4Zz5qKpn7u5v8McOzPG7BQmBaTSDaMwpOj/07vUlSQx9lfa/obU3Z6Pgv19hjmXLfhUZ1OfTmVPsMJ4eYydGtlrSPjpgzG2v7tllB5b/x0QaYAb1mbgWOwpNp3fGvxvGuIvpGEY9LiXNc5L9pxdRJHVl2g8LdEc9o+kzV2xLM+L7cGy60U67jaPAQKzTobfVG+MmB1CfUFViChPI+JCTFNkYRxqc5CwLqsbkyhJYchpF0Fi+lrxdVVfIFwfuXEea1gzsBFgNuDpr2NpjoTs/t0vt5eneXCGnOpudLYnPNQ0jngQ564NDEcJrWHHP3GwMioDL2AMNGsBNkT5zwhtHN9pj/YZCZYrY7SrXjwBjINLEeX1p2pnsGvUxvt9QqFV47/jNE5aZ6JkOXd2pP6wyjVzDNNz9RhD3QySiEMYX/D6KvhFYPnYTdwN4FnUN8o6hEPB8xG7XZgXji21RXYwUTWrbgP4xAUg5pEjvtHgsQaP/JG0Ijy8gUsxw5q5HvbGCiBSZZmhoMJpRtzPUk6CoHtQl3AhKg1HX+Nw3c5CUG1oeICcl07DJMILsFDrt15a7D0AaoCfC932JFDtySO6IpDSdHmJUhNk1hBSz3YdXiDk7R4eQC7gBT/IAuF1R7clFumW7rItbLWrP4kjQyLQaovMp+k0q7nonKuI7Vzw11MCViP5ADzzpDqVTBUvafZsai8fjY/qD/FvV1oADyRwb+UmE6CZ98gm5dN57pNXPlwYZOBHpJjkBc5UVGfDxVNtCtGHOBmwNpcllA2bOlj8SViwPjdhSyqc7vtRSjCHtjRVhwWFJ/I79lJm0dUSGjMWjO6kofFDEYyQjdgbkw5T/2JrHLj7h/jSTlBbtdtNvX8d+vFX/aQ3IqYPc3mJPMrzhOOSsNQrMOEkAALktNgaWGtyhY6MvLV9/Sym/ktsr1G+RQH+BECh9FkZXoPHTSMqtpUrA/1lojqhUmsKu/9iu8trw/00FRyuagtTfpYB9DRgoPbu/BERFIPVsPTCokNyIhGExOryEq1SCuBCObAwpaS+zPwWiOXg0sMBmhZ/Zy9rQCj2xDgt0YkBpDItiQngUXq/dV+bXFr2bsM5Xs8FKLwAFVni0afOywObVR+KBP5wTcPWVhVFJNZvqiwtcOAp7HyRGe38Cmbns5hELIdgIgoW/xwX2aDM7t5gY9SUMbL7y1Zw3E55dOAp1OqGjhdlwxjt3Wn4z+psc7X2Q7/3laX7u5dT8/NTLufzp5Xvfl0F9/xdgAGPhVddct5DzAAAAAElFTkSuQmCC'
  sessionStorage = window.sessionStorage;

  render() {
    return (
      <div>
        <div className="headerContent">
          <img className="logo" src={this.logo} alt="logo" />
          <span>WaitFree</span>
        </div>
        <div className="primaryArea">
          <div className="left">
            <div>
              <h3 className="welcomeTitle">Welcome</h3>
            </div>
            <p>Welcome to Looking For Chai! Please take a ticket by clicking the START below. We will try to serve you as soon as possible. THANK YOU!</p>
            <div className="startBtn button">
              <NavLink to="/partySize">Statr</NavLink>
            </div>
          </div>
          <div className="right">
            <div className="tableHeader">
              <table>
                <thead>
                  <tr>
                    <td>Position</td>
                    <td>IDs</td>
                    <td>Group Size</td>
                  </tr>
                </thead>
                <tbody className="tableBody">
                  <ReaderRow></ReaderRow>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome;
