/**
 * Copyright © 2012 ITD Systems
 *
 * This file is part of Alvex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

package com.alvexcore.share;

import org.springframework.beans.factory.InitializingBean;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import javax.xml.parsers.DocumentBuilder;
import java.util.ArrayList;
import java.util.List;

/**
 * Share extension registry implementation
 * 
 * 
 */

public class ShareExtensionRegistry  {
	private DocumentBuilder xmlBuilder;
	// list of extensions
	protected List<ShareExtension> extensions = new ArrayList<ShareExtension>();

	// registers new extension
	public void registerExtension(ShareExtension extension) throws Exception {
		for (ShareExtension ext : extensions)
			if (ext.getId().equals(extension.getId()))
				throw new Exception("Extension " + ext.getId()
						+ " is registered already");
		// register if it's not registered yet
		extensions.add(extension);
	}

	// returns a list of installed extensions
	public List<ShareExtension> getInstalledExtensions() {
		return extensions;
	}

}