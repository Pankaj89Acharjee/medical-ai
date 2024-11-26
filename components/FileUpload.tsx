"use client"

import Image from 'next/image'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

type FileUploadProps = {
    files: File[] | undefined //Initially noting be there
    onChange: (files: File[]) => void
}

const FileUpload = ({ files, onChange }: FileUploadProps) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        onChange(acceptedFiles)
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()} className='file-upload'>
            <input {...getInputProps()} />
            {files && files?.length > 0 ? (
                <Image
                    src={convertFileToUrl(files[0])}
                    width={1000}
                    height={1000}
                    className='max-h-[400px] overflow-hidden object-cover'
                />
            ) : (
                <>
                    <Image
                        src="/assets/icons/upload.svg"
                        width={40}
                        height={40}
                        alt='uploadIcon'
                    />

                    <div className='file-upload_label'>
                        <p>Click to upload<span> or you can drag and drop</span></p>
                        <p>Supported Formats: JPEG, JPG, PNG of max size: 800 x 400 pixels</p>
                    </div>
                </>
            )}
            {
                isDragActive ?
                    <p className='file-upload_label font-semibold text-xl'>Drop the files here ...</p> : ''
                    
            }
        </div>
    )
}

export default FileUpload