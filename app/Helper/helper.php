<?php


use Illuminate\Support\Facades\Storage;

if (!function_exists('upload')) {
    function upload($request, $oldImage = null)
    {
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('/images', ['disk' => 'my_files']);
            if ($oldImage) {
                Storage::disk('my_files')->delete($oldImage);
            }
        } else {
            $imagePath = $oldImage;
        }
        return $imagePath;
    }
}
