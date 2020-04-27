import React, { useState, useEffect } from "react"
import { format } from "date-fns"

import Layout from "../../components/Layout"
import ManagementHubButton from "../../components/admin/ManagementHubButton"
import GeneralButton from "../../components/admin/GeneralBtn"

const ManageBlog = () => {
     // This function controls what happens when the user hits the delete button
    function onClick(event) {
        const { type } = event
        let success = true
        if(type === 'click') {
            if (confirm("Are you sure you want to delete this post?")) {
                // Remove post from database
                alert("Post deleted.")
            }
        }
    }

   return (
        <Layout>
            <h2 className="text-center">Manage Blog Posts</h2>
            <div className="text-center">
                <p>blog list here</p>
            </div>
            <div className="d-flex flex-row justify-content-between">
                <div className="d-inline p-2">
                    <ManagementHubButton/>
                </div>
                <div className="d-inline p-2">
                    <GeneralButton words="Create New Post" link="/.."/>
                </div>
            </div>
			<style jsx>{`
                .box {
                    text-align:center;
                }
			`}</style>
        </Layout>
    )
}
export default ManageBlog