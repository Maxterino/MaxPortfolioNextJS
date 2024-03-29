import React from 'react'

function CommentsForm() {
  return (
    <div className="comments-from section-padding sub-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center mb-60">
              <h3>Leave a comment</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <form id="contact-form" method="post" action="contact.php">
              <div className="messages"></div>

              <div className="controls row">
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input id="form_name" type="text" name="name" placeholder="Name" required="required" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input id="form_email" type="email" name="email" placeholder="Email" required="required" />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <textarea id="form_message" name="message" placeholder="Message" rows="4" required="required"></textarea>
                  </div>
                  <div className="text-center">
                    <div className="mt-30 hover-this cursor-pointer">
                      <button type="submit" className="hover-anim">
                        <span className="text">Post <br /> Comment</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentsForm